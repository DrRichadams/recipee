import React, { useCallback, useEffect, useState } from "react"
import { StatusBar, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Font from "expo-font"
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './src/screens/LoginScreen';
import MainScreen from "./src/screens/MainScreen";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'roboto-reg': require("./assets/fonts/Roboto-Regular.ttf")
//   })
// }

export default function App() {

  // const [ isLoading, setIsLoading ] = useState(false)
  // if(!isLoading) {
  //   return <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoading(true)} onError={console.warn()} />
  // }

  const [ showHeader, setShowHeader ] = useState(true)

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
          'roboto-reg': require("./assets/fonts/Roboto-Regular.ttf"),
          'roboto-med': require("./assets/fonts/Roboto-Medium.ttf"),
          'roboto-bold': require("./assets/fonts/Roboto-Bold.ttf"),
          'roboto-black': require("./assets/fonts/Roboto-Black.ttf"),
          'roboto-thin': require("./assets/fonts/Roboto-Thin.ttf"),
          'roboto-light': require("./assets/fonts/Roboto-Light.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (appIsReady) {
     SplashScreen.hideAsync();
  }
  if (!appIsReady) {
    return null;
  }


  /////////////////////// TRYING THE EXPO SPLASH SCREEN /////////////////////////

  

  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        {/* <StatusBar backgroundColor={"rgb(36,40,80)"} /> */}
        <Stack.Navigator initialRouteName="Home" screenOptions={{ 
            headerShown: false,
            // headerTitle: "HE IS HERE",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#01050f",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerBackImageSource: require("./assets/images/left-arrow.png"),
         }}>
          <Stack.Screen name="Home"  options={{
            headerShown: false,
          }}>
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="MainScreen" options={{
            headerTitle: "RECIPES",
              headerShown: true,
              headerRight: () => (
                <Button title="Logout" color={"blue"} />
              )
          }}>
            {props => <MainScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      // <View
      //   style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      //   onLayout={onLayoutRootView}>
      //   <Text style={{ fontFamily: "roboto-reg" }}>SplashScreen Demo! 👋</Text>
      //   {/* <Entypo name="rocket" size={30} /> */}
      // </View>
  );
}
