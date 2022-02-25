import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, Raleway_600SemiBold } from '@expo-google-fonts/raleway'

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  if(!fontsLoaded){
    return<AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}