import React, { useState, useReducer } from "react"
import { View, Text, Button, TextInput, Alert, ScrollView, KeyboardAvoidingView} from "react-native"

import { ScreenContainer } from "../features/Containers"
import { LineInput } from "../features/Inputs"

const UPDATE_FORM_INPUT = "UPDATE_FORM_INPUT" 

const formReducer = (state, action) => {
    if(action.type === UPDATE_FORM_INPUT) {
        return{
            ...state,
            inputValues: {
                ...state.inputValues,
                [action.payload.to]: action.payload.text
            }
        }
    } else {
        return state
    }
}

const RecipesScreen = ({navigation}) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputValues: {
            identity: "",
            email: "",
            salary: "",
        },
        is_a_go: false,
    })

    const [ inputText, setInputText ] = useState("")

    return(
        <ScreenContainer>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={100}>
                <ScrollView>
                    <Text>RECIPES</Text>
                    <TextInput
                        placeholder="IDENTITY NUMBER"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "identity"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="EMAIL ADDRESS"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "email"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="email-address"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="SALARY"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "salary"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="SALARY"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "salary"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="SALARY"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "salary"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="SALARY"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "salary"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <TextInput
                        placeholder="SALARY"
                        returnKeyType="next"
                        onChangeText={text => dispatch({type: UPDATE_FORM_INPUT, payload: {text, to: "salary"}})}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(36,40,80,0.5)",
                            width: "90%",
                            marginVertical: 20,
                        }}
                        keyboardType="decimal-pad"
                        // value={inputText}
                    />
                    <View style={{ width: "90%", margin: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text>ENTERED:</Text>
                        <Text>{formState.inputValues.identity}</Text>
                    </View>
                    <View style={{ width: "90%", margin: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text>EMAIL:</Text>
                        <Text>{formState.inputValues.email}</Text>
                    </View>
                    <View style={{ width: "90%", margin: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text>SALARY:</Text>
                        <Text>{formState.inputValues.salary}</Text>
                    </View>
                    <Button title="Go back" onPress={() => navigation.goBack()} />
                    </ScrollView>
                </KeyboardAvoidingView>
        </ScreenContainer>
    )
}

export default RecipesScreen