import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { MainContainer } from "../utils/Containers";
import { Title1 } from "../features/Texts";

const MainScreen = ({ navigation ,triggerHeader }) => {
    return(
        <MainContainer>
            <Title1>WELCOME TO MAIN</Title1>
        </MainContainer>
    )
}

export default MainScreen