import styled from "styled-components";      
import { colors } from "../Contans";                           

export const Title = styled.Text`
    font-family: "inter-bold";
    font-size: 24px;
    color: ${colors.primary};
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    font-family: "inter-bold";
    text-align: center;
    margin: 6px 0;
    text-transform: uppercase;
    line-height: 20px;
    color: ${colors.primary};
`;

export const BtnText = styled.Text`
    color: ${colors.primary};
    font-weight: bold;
    font-size: 16px;
`;