import  React from 'react' ;
import {View , Text ,StyleSheet} from 'react-native' ;
import Colour from '../assets/Colour';
const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.handerTitle}>{props.title}</Text> 
        </View>
    );
};


const styles =StyleSheet.create({
header:{
    
    width:'100%',
    height:70,
    paddingTop:36,
    backgroundColor: Colour.handerColor,
    alignItems:'center',
    justifyContent:'center'
},
handerTitle:{
   
 
  
    fontSize:25,
    fontWeight: "bold",

    
}
});
export default Header ;
