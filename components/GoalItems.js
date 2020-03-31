import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import Colour from '../assets/Colour'

const GoalItems = props => {
    const msg =()=>{
        console.log('ccleaer');
    };
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={props.onDelete}> 
        <View style={styles.itemList}>
            <Text>{props.title}</Text>

        </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    itemList: {
        padding: 10,
        backgroundColor: Colour. itemListColor,
        borderColor: Colour.itemBorderColor,
        borderWidth: 1,
        marginVertical: 5,
        // margin: 10



    }
});
export default GoalItems ;
 