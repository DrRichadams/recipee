import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList } from "react-native"
import { removeRecipe, setRecipes } from "../store/actions/bakeryAction"


const RecipesScreen = ({navigation}) => {

    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ isRefreshing, setIsRefreshing ] = React.useState(false)
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
        const loadRecipes = async () => {
            setIsLoading(true)
            await dispatch(setRecipes())
            setIsLoading(false)
        }
        loadRecipes()
    }, [])

    if(isLoading) {
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={"large"} color="red" />
            </View>
        )
    }

    if(!isLoading && recipes.length === 0) {
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderRadius: 6 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>There are currently no available recipes</Text>
            </View>
        )
    }

    const toRender = (repData) => {
        return(
            <TouchableOpacity style={styles.repItem} onLongPress={handleRemoveRecipe.bind(this, repData.item.id)}>
                <Text style={{ color: "#01050f" }}>{repData.item.name}</Text>
                <View style={{paddingLeft: 12}}>
                    {
                        repData.item.ingridients && repData.item.ingridients.map((ing, ingIndex) => (
                            <Text key={ingIndex} style={{fontWeight: "bold", fontSize: 10, color: "red"}}>{ing}</Text>
                        ))
                    }
                </View>
            </TouchableOpacity>
        )
    }

    const showRefresh = () => Alert.alert("Warning", "Refresh has worked", [{text:"Okay"}])

    return(
        <View style={styles.screen}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>ALL RECIPES</Text>
            <View style={{ flex: 1, width: "100%", padding: 10 }}>
                <FlatList 
                    onRefresh={showRefresh}
                    refreshing={isRefreshing}
                    data={recipes}
                    keyExtractor={item => item.id}
                    renderItem={repData => toRender(repData)}
                />
            </View>

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