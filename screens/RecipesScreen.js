import React from "react"
import { Text, Button} from "react-native"

import { ScreenContainer } from "../features/Containers"

const RecipesScreen = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>RECIPES</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </ScreenContainer>
    )
}

export default RecipesScreen