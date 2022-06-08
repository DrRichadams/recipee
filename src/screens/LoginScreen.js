import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"

import { MainContainer, AllBetweenSpace } from "../utils/Containers";
import { MainBtn } from "../features/buttons/GoBtn";
import { BannerImg } from "../features/Images";
import { Title1, SubTitle1 } from "../features/Texts";

const LoginScreen = ({navigation, triggerHeader}) => {
    return(
        <MainContainer>
            <Title1>TASTY BAKE</Title1>
            <SubTitle1>A collection of all your favourite baking recipes. Let the baking begin!</SubTitle1>
            <AllBetweenSpace>
                <BannerImg source={require("../../assets/images/food_img1.png")} resizeMode="contain"/>
            </AllBetweenSpace>
            <MainBtn onPress={() => {
                navigation.navigate("MainScreen")
            }}>Let's Tasty</MainBtn>
        </MainContainer>
    )
}

export default LoginScreen