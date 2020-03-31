import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Image } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';
import Screen from './components/Screen';
import Hander from './components/Hander';

import Colour from './assets/Colour';


export default function App() {

  const [cousreGaol, setCousreGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const AddGoalHandler = goal => {
    console.log(goal);
    setCousreGoal(current => [...cousreGaol, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  };
  const RemoveGaol = goalId => {
    setCousreGoal(currenGoal => {
      return currenGoal.filter((goal) => goal.id !== goalId);
    });

  };
  const CancelGoalHAndler = () => { setIsAddMode(false) };
  const name = 'moeez';
  return (
    <View style={{flex:1}}>
      <Hander title='To Do List'/>

    <View style={{flex:1}}> 
    
      <Screen></Screen>
      <View style={styles.screen}>


        <Button title='Add New Goal' onPress={() => setIsAddMode(true)} animation />
        <GoalInput visible={isAddMode} onAddGoal={AddGoalHandler} onCancel={CancelGoalHAndler} />

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={cousreGaol} renderItem={itemData => <GoalItems id={itemData.item.id} title={itemData.item.value} onDelete={RemoveGaol.bind(this, itemData.item.id)} />
          } />


      </View>
      <View style={styles.bottom}>
        <Text>Touch Goal to delete</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 20,
    backgroundColor: Colour.main,
  },
  bottom:{
    padding:20,
    
    fontWeight: "bold",
    fontSize:10,
    backgroundColor:Colour.main,
    alignItems:'center',

  }


});




