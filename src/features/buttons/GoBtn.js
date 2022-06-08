import React from "react"
import styled from "styled-components"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const BtnTemplate = styled.TouchableOpacity`
    padding: 15px;
    width: 90%;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #AD40AF;
`;

const BtnTextLight = styled.Text`
    color: #fff;
`;

export const MainBtn = ({ children, onPress }) => (
        <BtnTemplate onPress={onPress}>
            <BtnTextLight>{children}</BtnTextLight>
            <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
        </BtnTemplate>
)