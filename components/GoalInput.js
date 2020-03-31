 import React ,{useState}from 'react';
 import {View , Text , Button, StyleSheet ,TextInput ,Modal , Alert} from 'react-native';
 import Colour from '../assets/Colour';

 

 const GoalInput =props=>{
    const [enteredGoal, setEnterGoal] = useState('');
    const GoalInputHandler = (enteredText) => {
     
        setEnterGoal(enteredText);
      
      
      };
    const AddGoalHandler =()=>{
      if(enteredGoal === ''){
        Alert.alert(
          "Invalid ",
          'Enrter your Goal',
          [{text:'okay' ,style:'cancel' }]
      );
        
        
      
      
      }
      else{
        props.onAddGoal(enteredGoal);
        setEnterGoal('');
        
      }
      
      
    }; 
     return(
       <Modal visible = {props.visible} animationType = 'slide' >
        <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' style={styles.input} onChangeText={GoalInputHandler} value={enteredGoal} />
        <View style={styles.buttonContainer}>
      
        <Button title='ADD' onPress={AddGoalHandler} /> 
        </View>
      </View>
      </Modal>

     );
 }

 const styles = StyleSheet.create({
    inputContainer: {
      flex:1,
      backgroundColor:Colour.main,
        
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '80%',
        borderColor: Colour.itemBorderColor,
        borderWidth: 1,
        padding: 10,
        marginBottom : 10,
        backgroundColor: Colour.itemListColor,
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'80%'
      },
      button:{
        width:'50%'
      }
     
 });

 export default GoalInput ;