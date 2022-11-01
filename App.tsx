import React from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './src/pages/Home';

import { 
  
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { useFonts } from 'expo-font';
SplashScreen.preventAutoHideAsync();
export default function App() {

  const [floatLoaded]=useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })
  if(!floatLoaded){
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}
