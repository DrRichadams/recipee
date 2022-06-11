import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

// import { ScreenContainer } from "../features/Containers"
import { ScreenContainer } from "../features/Containers"
import { ButtonShell, WireBtn } from "../features/Buttons"
import { Title } from "../features/Texts"
import { colors } from "../Contans"
import { Ionicons } from "@expo/vector-icons"

const Login = ({navigation}) => {
    return(
        <ScreenContainer>
            <View style={styles.ImgContainer}>
                <Image resizeMode="contain" style={styles.imgLogo} source={require("../assets/images/logo.png")}/>
            </View>
            <Title>COOKING COMPANION</Title>
            <View style={styles.btnContainer}>
                <WireBtn icon="fast-food" onPress={() => navigation.navigate("recipes")}>RECIPES</WireBtn>
                <WireBtn icon="ios-home">ESSENTIALS</WireBtn>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    ImgContainer: {
        width: "70%",
        height: 200,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    imgLogo: {
        width: "100%"
    },
    btnContainer: {
        flex: 1,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Login