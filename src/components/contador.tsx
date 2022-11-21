import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';



interface CountProps {
  tasksCounter: number,
  taskcountercomplete:number
}

export function Contador({ tasksCounter,taskcountercomplete }: CountProps) {
  const tasksCounterText = tasksCounter === 1 

  
  return (
    <View style={styles.container}>
        <View style={styles.contadores}>

              
            <View style={styles.form}>
              <Text style={styles.tasksCounter1}>Criadas </Text>
              <View style={styles.count}>
                  <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}</Text>
              </View>
            </View>


            <View style={styles.form}>
              <Text style={styles.tasksCounter2}>Concluidas </Text>
              <View style={styles.count}>
                  <Text style={styles.tasksCounterBold}>{taskcountercomplete}</Text>
              </View>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    // backgroundColor:'red',
    
  },
  contadores:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:"row",
    padding:24,
  },
  count:{
    
    backgroundColor:'#333333',
    width:25,
    borderRadius:999,
    
  
  },
  tasksCounter1: {
    color: '#4EA8DE',
    fontFamily: 'Inter_400Regular',
    // fontSize: 14,
  },
  tasksCounter2: {
    color: '#8284FA',
    fontFamily: 'Inter_400Regular',
    // fontSize: 14,
  },
  tasksCounterBold: {
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
    alignItems:'center',
    marginLeft:'auto',
    marginRight:'auto',
    
    
  },
  tarefastext1:{
    color:'#808080',
    fontFamily: 'Inter_700Bold',
    
  },
  tarefastext2:{
    color:'#808080',
    fontFamily: 'Inter_400Regular',

  },
  form:{
    alignItems:'center',
    flexDirection:'row'
  
  }

});