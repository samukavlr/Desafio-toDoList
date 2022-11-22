import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {Feather} from '@expo/vector-icons';
import { ItemWrapper } from './ItemWrapper';
import img from '../assets/images/logo/Clipboard.png'

import trashIcon from '../assets/icons/trash/trash.png'

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
    data={tasks}
    keyExtractor={item => String(item.id)}
    contentContainerStyle={{ paddingBottom: 24 }}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=>(
    <View style ={styles.form} >
      <Image style ={styles.image} source={img}  />
      <Text style={styles.text} >
      Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text2}>
      Crie tarefas e organize seus itens a fazer
      </Text>
      </View>
    )}
    renderItem={({ item, index }) => {
      
        return (
          <ItemWrapper index={index}>
            <View >
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                //TODO - use onPress (toggle task) prop
                onPress={() => toggleTaskDone(item.id)}
              >
                <View 
                  testID={`marker-${index}`}
                  //TODO - use style prop
                  style={
                    item.done
                    ?styles.taskMarkerDone
                    :styles.taskMarker
                  } 
                >
                  { item.done && (
                    <Feather 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>
                
                 <View style={styles.wrap}>
                    <Text 
                      //TODO - use style prop
                      style={item.done
                        ?styles.taskTextDone
                        :styles.taskText
                      }
                      >
                      {item.title}
                    </Text>
                  </View>   
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              //TODO - use onPress (remove task) prop
              onPress={() => removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  form:{
    borderTopColor:'#333333',
    borderTopWidth:1,
    paddingTop:48,
    alignItems:'center',
    marginHorizontal:24,
  },
  wrap:{
    flexWrap:'wrap'

  },
  image:{
    marginBottom:16,
    width:56,
    height:56,
  },
  text:{
    color:'#808080',
    fontWeight: 'bold',
    
  },
  text2:{
    color:'#808080'
  },
  
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  taskMarker: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#fff',
    fontFamily: 'Inter_500Medium',
    
  },
  taskMarkerDone: {
    height: 18,
    width: 18,
    borderRadius: 10,
    backgroundColor: '#8284FA',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_500Medium'
  }
})