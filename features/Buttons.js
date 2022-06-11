import React from "react"
import { Ionicons } from "@expo/vector-icons"

import styled from "styled-components";
import { colors } from "../Contans";
import { BtnText } from "./Texts";

export const ButtonShell = styled.TouchableOpacity`
    border: 2px solid ${colors.primary};
    padding: 15px;
    width: 90%;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const WireBtn = ({children, icon, onPress}) => {
    return(
        <ButtonShell onPress={onPress}>
            <BtnText>{children}</BtnText>
            <Ionicons name={`${icon}`} size={22} color={colors.primary} />
        </ButtonShell>
    )
}