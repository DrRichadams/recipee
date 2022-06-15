import React from "react"
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import bakeryReducer from "./store/reducers/bakeryReducer";
import Login from "./screens/Login";
import RecipesScreen from "./screens/RecipesScreen";

const rootReducer = combineReducers({
    bakery: bakeryReducer,
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={"rgba(217,4,41,1)"}/>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name="login" component={Login} />
             <Stack.Screen name="recipes" component={RecipesScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
