import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signup, login } from '../store/actions/auth';

const Input = props => <TextInput  style={styles.input} {...props} /> 

const AuthScreen = ({navigation}) => {
    const [ authUsername, setAuthUsername ] = useState('')
    const [ authPassword, setAuthPassword ] = useState('')
    const [ isSignUp, setisSignUp ] = useState(false)
    const [ isLoading, setisLoading ] = useState(false)
    const dispatch = useDispatch()

    const handleLoginEvent = async () => {
        setisLoading(true)
        if(authUsername === '' && authPassword === '') {
            Alert.alert("Warning!", "Provide your credentials to log in.", [{text: "OK"}])
            setisLoading(false)
            return
        }
        await dispatch(login(authUsername, authPassword))
        setisLoading(false)
        navigation.navigate("login")
    }

    const handleSignUpEvent = () => {
        if(authUsername === '' && authPassword === '') {
            Alert.alert("Warning!", "Provide the needed information to create an account.", [{text: "OK"}])
            return
        }
        dispatch(signup(authUsername, authPassword))
    }

    const switchMode = (param) => {
        setAuthUsername("")
        setAuthPassword("")
        if(param === "signup") setisSignUp(true)
        if(param === "login") setisSignUp(false)
    }

    const btnRender = () => {
        if(!isLoading) return <Button title='Login' onPress={handleLoginEvent} />
        return <ActivityIndicator size={"large"} color="red" />
    }

    if(!isSignUp) {
        return(
            <View style={styles.container}>
                <LinearGradient colors={['rgba(255,0,0,0.4)', 'rgba(1,161,231,0.1)']} style={styles.background} >
                    <Text style={{color:"red", fontWeight: "bold", textTransform: "uppercase", fontSize: 16}}>Login</Text>
                    <View style={styles.inputsContainer}>
                        <Input placeholder="Email" onChangeText={text => setAuthUsername(text)} value={authUsername} />
                        <Input placeholder="Password" secureTextEntry onChangeText={text => setAuthPassword(text)} value={authPassword} />
                    </View>
                    <View style={{ width: "100%", padding: 20 }}>
                        {/* <Button title='Login' onPress={handleLoginEvent} /> */}
                        {btnRender()}
                    </View>
                    <TouchableOpacity onPress={() => switchMode("signup")}><Text>Sign Up</Text></TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(255,0,0,0.4)', 'rgba(1,161,231,0.1)']} style={styles.background} >
        <Text style={{color:"red", fontWeight: "bold", textTransform: "uppercase", fontSize: 16}}>Sign Up</Text>
        <View style={styles.inputsContainer}>
            <Input placeholder="Email" onChangeText={text => setAuthUsername(text)} value={authUsername} />
            <Input placeholder="Password" secureTextEntry onChangeText={text => setAuthPassword(text)} value={authPassword} />
        </View>
        <View style={{ width: "100%", padding: 20 }}>
            <Button title='Sign Up' onPress={handleSignUpEvent} />
        </View>
        <TouchableOpacity onPress={() => switchMode("login")}><Text>Log In</Text></TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "#01050f",
    borderBottomWidth: 2,
    width: "90%",
    padding: 5,
    marginVertical: 10
},
});
