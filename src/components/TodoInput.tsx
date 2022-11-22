//https://docs.expo.dev/
//https://icons.expo.fyi/

import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
import {Feather} from '@expo/vector-icons';

interface TodoInputProps {
  addTask: (task: string) => void;
}



export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask if task not empty and clean input value 
    if(!task)
    return;
    addTask(task)
    setTask('')
    
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#808080"
        
        returnKeyType="send"
        selectionColor="#F2F2F2"
        
        onChangeText={setTask}
        value={ task }
        onSubmitEditing={() => handleAddNewTask()}
        
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.8}
        style={styles.addButton}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Feather style={styles.icon} name="plus-circle" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    
  
  },
  input: {
    flex: 1,
    height: 54,
    width:271,
    paddingHorizontal: 16,
    backgroundColor: '#333333',
    borderRadius:6,
    color: '#F2F2F2',
    

    
  },
  addButton: {
    
    height: 52,
    width:52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6,
    marginLeft:4,
    backgroundColor:"#1E6F9F"
  },

  icon:{
    fontSize:16,
    color:"#F2F2F2",
    
  },
  borda:{
    borderBottomColor:'#5E60CE',
    
  }
  

});