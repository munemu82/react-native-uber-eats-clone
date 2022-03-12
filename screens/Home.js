import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SafeViewAndroid from "../components/home/SafeViewAndroid";
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, {
    localRestaurants,
  } from "../components/home/RestaurantItems";


/* YELP API KEY and INFO*/
const YELP_API_KEY ="PZzaOUcA25kHd8weLoJ9NceniGxAPrvM2EnXpif_mWDm3VUQfzHiPP6F3rFkVOFcvUPIj8YNxoib53DAJhG7FeXSAnmI6Z4kREiSpKXIIpWs5PH-NdVY2sXq77McYnYx"

export default function Home({ navigation }) {
const [restaurantData, setRestaurantData] = useState(localRestaurants);
const [city, setCity] = useState("Sydney");
const [activeTab, setActiveTab] = useState("Delivery");

/*Function to get restaurant data from YELP API */
const getRestaurantDataFromYelp = () => {
  /*const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;*/
const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
const apiOptions = {
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
};
return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
};

useEffect(() => {
  getRestaurantDataFromYelp();
  [city, activeTab]
});
  return (
    <View style={SafeViewAndroid.AndroidSafeArea}>
        <View style={{ backgroundColor: "white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar  cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Categories />
            <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
    </View>
  )
}