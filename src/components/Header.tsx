import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import logoImg from '../assets/images/logo/logotodo.png';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ?'tarefa' : 'tarefas'
  
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.img}/>
      
      <View style={styles.tasks}>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    height:173,
    width :'100%',
    backgroundColor: '#0d0d0d',
    paddingTop:70,
    paddingBottom:70,
    alignItems: 'center',
    
  },

  img: {
    width:110.34,
    height:32,

  },
  tasks: {
    alignItems: 'center',
    
  },
  tasksCounter: {
    color: '#FFF',
    fontFamily: 'Inter_400Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
  }
});