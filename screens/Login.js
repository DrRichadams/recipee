import React, { useReducer } from "react"
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native"
import { useDispatch } from "react-redux"
import { addNewRecipe } from "../store/actions/bakeryAction"

const Input = props => <TextInput  style={styles.input} {...props} /> 

const ADD_RECIPE = "ADD_RECIPE"
const CLEAR_BOARD = "CLEAR_BOARD"

const formReducer = (state, action) => {
    if(action.type === ADD_RECIPE) {
        switch(action.payload.id) {
            case 0:
                return{ ...state, name_of_recipe: action.payload.value }
            case 1:
                return{ ...state, ing1: action.payload.value }
            case 2:
                return{ ...state, ing2: action.payload.value }
            case 3:
                return{ ...state, ing3: action.payload.value }
            case 4:
                return{ ...state, ing4: action.payload.value }
        }
    } else if(action.type === CLEAR_BOARD) {
        return{
            name_of_recipe: "",
            ing1: "",
            ing2: "",
            ing3: "",
            ing4: "",
        }
    } else {
        return state
    }
}

const Login = ({navigation}) => {

    const dispatchRecipe = useDispatch()

    const [ repState, dispatch ] = useReducer(formReducer, {
        name_of_recipe: "",
        ing1: "",
        ing2: "",
        ing3: "",
        ing4: "",
    })

    const handleNext = () => {
        if(
            repState.name_of_recipe.trim() !== "" &&
            repState.ing1.trim() !== "" &&
            repState.ing2.trim() !== "" &&
            repState.ing3.trim() !== "" &&
            repState.ing4.trim() !== ""
        ) {
            const dataEntity = {
                id: Math.random().toString(),
                name: repState.name_of_recipe,
                ingridients: [
                    repState.ing1,
                    repState.ing2,
                    repState.ing3,
                    repState.ing4,
                ]
            }
            dispatchRecipe(addNewRecipe(dataEntity))
            // console.log(dataEntity)
            dispatch({ type: CLEAR_BOARD })
            Alert.alert("Success", "Recipe added successfully", [{ text: "Okay" }])
            // navigation.navigate("recipes")
        } else{
            console.log("Fill all the fields")
        }
    }

    const handleTextChange = (id, text) => {
        dispatch({ type: ADD_RECIPE, payload: { id, value: text } })
    }

    return(
        <View style={styles.screen}>
            <Text style={{ fontWeight: "bold",fontSize: 20, color: "red" }}>COOKING COMPANION</Text>
            <View style={styles.fullWidth}>
                <Input placeholder="Name of recipe" onChangeText={handleTextChange.bind(this, 0)} value={repState.name_of_recipe} />
                <Input placeholder="Ingridient 1" onChangeText={handleTextChange.bind(this, 1)} value={repState.ing1} />
                <Input placeholder="Ingridient 2" onChangeText={handleTextChange.bind(this, 2)} value={repState.ing2} />
                <Input placeholder="Ingridient 3" onChangeText={handleTextChange.bind(this, 3)} value={repState.ing3} />
                <Input placeholder="Ingridient 4" onChangeText={handleTextChange.bind(this, 4)} value={repState.ing4} />
            </View>
            <View style={styles.btnContainer}>
                <Button title="Add recipe" onPress={handleNext} />
            </View>
            <View style={styles.btnContainer}>
                <Button title="EXPLORE RECIPES" color={"red"} onPress={() => navigation.navigate("recipes")} />
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
    input: {
        borderBottomColor: "#01050f",
        borderBottomWidth: 2,
        width: "90%",
        padding: 5,
        marginVertical: 10
    },
    fullWidth: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer: {
        width: "90%",
        marginVertical: 12
    }
})

export default Login