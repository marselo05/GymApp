import * as ImagePicker from 'expo-image-picker'

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from "react"

import { COLORS } from "../constant/colors"

const ImageSelector = props => {

    const [pickedUi, setPickedUi] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted')
        {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la cámara para usar la aplicación.',
                [{ text: 'Ok' }],
            )
            return false
        }
        return true
    }

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })

        console.log(image)

        setPickedUi(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.conatainer}>
            <View style={styles.preview}>
                {!pickedUi ? (<Text>No hay imagen selecionada</Text>)
                : (<Image
                        style={styles.image}
                        source={{uri: pickedUi}}
                />)}
            </View>
            <Button 
                title="Tomar foto"
                color={COLORS.color2}
                onPress={handleTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer:{
        marginBottom: 10,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.color2,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ImageSelector;