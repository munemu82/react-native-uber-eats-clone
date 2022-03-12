import { View, Text, Image } from 'react-native'
import React from 'react'

/*Specify some key fields */
const image = "http://img1.wsimg.com/isteam/ip/ac8f95d5-8ffd-4ded-becc-d7c8a14bbcd1/MenloPark-6.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai . Comfort Food . $$ . ticket . 4 stars . (2913+)";

export default function About() {
  return (
    <View>
        {/* Sub Component for Restaurant Image */}
        <RestaurantImage image={image} />
        {/* Sub Component for Restaurant Title */}
        <RestaurantTitle title={title} />
        {/* Sub Component for Restaurant Description */}
        <RestaurantDescription description={description} />
    </View>
  )
}

/* Restaurant Image component*/
const RestaurantImage = (props) => (
    <Image source={ { uri: props.image }} style={{ width: "100%", height: 180 }} />
);
/* Restaurant title component*/
const RestaurantTitle = (props) => (
    <Text style={{ 
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {props.title};
    </Text>
);
/* Restaurant Description component*/
const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15
    }}>
        {props.description}
    </Text>
);
