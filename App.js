import React, { useEffect, useState } from "react"
import { StatusBar, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons"

import HeaderButton from "./components/HeaderButton"

import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  /////////////////////// TRYING THE EXPO SPLASH SCREEN /////////////////////////
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'inter-bold': require("./assets/fonts/Inter-Bold.ttf"),
        });
      } catch (e) { console.warn(e)} finally {setAppIsReady(true)}
    }

    prepare();
  }, []);

  if (appIsReady) SplashScreen.hideAsync();
  if (!appIsReady) return null;

  /////////////////////// TRYING THE EXPO SPLASH SCREEN /////////////////////////

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        
      </NavigationContainer>
  );
}
