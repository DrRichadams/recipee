import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Alert } from "react-native"
import { removeRecipe, setRecipes } from "../store/actions/bakeryAction"


const RecipesScreen = ({navigation}) => {

    const [ curSelect, setCurSelect ] = React.useState(1)
    const recipes = useSelector(state => state.bakery.recipes)
    const dispatch = useDispatch()

    const handleRemoveRecipe = (id) => {
        dispatch(removeRecipe(id))
        Alert.alert("Warning!!!", "Recipe removed successfully", [{ text: "Okay" }])
    }

    const showListData = (index) => {
        setCurSelect(index + 1)
    }

    useEffect(() => {
        dispatch(setRecipes())
    }, [])

    return(
        <View style={styles.screen}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>ALL RECIPES</Text>
            <ScrollView style={{ flex: 1, width: "100%", padding: 10 }}>
                {
                    recipes && recipes.map((rep, index) => (
                        <TouchableOpacity 
                            key={rep.id} 
                            style={styles.repItem} 
                            onPress={showListData.bind(this, index)}
                            onLongPress={handleRemoveRecipe.bind(this, rep.id)}
                            >
                            <Text style={{ color: "#01050f" }}>{rep.name}</Text>
                            <View style={{paddingLeft: 12}}>
                                {
                                    rep.ingridients && rep.ingridients.map((ing, ingIndex) => (
                                        <Text key={ingIndex} style={{fontWeight: "bold", fontSize: 10, color: "red", display: index + 1 == curSelect ? "flex":"none"}}>{ing}</Text>
                                    ))
                                }
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <View style={styles.btnContainer}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10
    },
    btnContainer: {
        width: "90%",
        marginVertical: 12
    },
    repItem: {
        backgroundColor: "#fff",
        padding: 8,
        marginBottom: 6
    }
})

export default RecipesScreen