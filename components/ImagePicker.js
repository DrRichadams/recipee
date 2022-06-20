import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImgPicker = () => {

    const [ pickedImage, setPickedImage ] = useState()
    const [ curImgUri, setCurImgUri ] = useState()

    const saveImg = async () => {
        const filename = pickedImage.split('/').pop()
        const newPath = FileSystem.documentDirectory + filename
        // const newPath = FileSystem.documentDirectory + "1.jpg"

        try {
            await FileSystem.moveAsync({
                from: pickedImage,
                to: newPath
            })
            await AsyncStorage.setItem('user_img', JSON.stringify(newPath))
        } catch(err) { console.log(err) }
    }

    const takeImageHandler = async () => {
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [5, 4],
            quality: 0.5
        })
        // console.log(image)
        console.log("Image uri", image.uri)
        setPickedImage(image.uri)
    };

    useEffect(() => {
        const retrieveImg = async () => {
            const imgUri = await AsyncStorage.getItem("user_img")
            const parsedUri = JSON.parse(imgUri)
            console.log("New uri", imgUri)
            console.log("Parsed uri", parsedUri)
            setCurImgUri(parsedUri);
        }

        retrieveImg()
    }, [])

    const ImageComp = () => {
        return(
            <View>{curImgUri && <Image style={styles.image} source={{uri: curImgUri}} />}</View>
        )
    }

    return(
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {/* {!pickedImage ? <Text>No images taken yet.</Text>
                : <ImageComp />} */}
                <ImageComp />
            </View>
            <Button title="Take image" onPress={takeImageHandler}/>
            {pickedImage ? <Button title="SAVE IMAGE" onPress={saveImg}/> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    imagePicker: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagePreview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%"
    },
});

export default ImgPicker;