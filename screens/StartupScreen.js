import React, { useEffect } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { authenticate } from "../store/actions/auth";

const StartupScreen = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const tryLogin = async () => {
            const value = await AsyncStorage.getItem('@auth_data')
            if(!value) { 
                console.log("AUTH DATA ERROR", value)
                navigation.navigate("auth")
                return
            }
            const authData = JSON.parse(value)
            console.log("AUTH DATA", authData)
            const {token, userId, expDate} = authData
            const expirationDate = new Date(expDate)

            if(expirationDate <= new Date() || !token || !userId) {
                navigation.navigate("auth")
                return
            }
            const expTime = expirationDate.getTime() - new Date().getTime()
            dispatch(authenticate(token, userId, expTime))
            navigation.navigate("login")
        }
        tryLogin()
    }, [])
    return(
        <View style={styles.screen}>
            <ActivityIndicator size={"large"} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default StartupScreen