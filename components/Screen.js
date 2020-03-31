import React from 'react';
import {View,Image} from "react-native";

const Screen=props=>{
    return(
        <View>
             <Image
        style={{resizeMode: 'cover',}}
        source={require('./first.gif')}
      />
        </View>
    );
}

export default Screen; 