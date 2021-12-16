import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

// import { StyleSheet, Text, View } from "react-native"
import {COLORS} from '../constant/colors'
import ImageSelector from '../components/ImageSelector'
import { addPlace } from '../store/places.actions'
import { useDispatch } from 'react-redux'

// 


const PerfilScreen = ({navigation}) => {
    
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')

    const handleTitleChange = text => {
        setTitle(text)
    } 

    // 
    
    const handlePickImage = (image) => {
        setImage(image)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label} >Nombre</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />

                <ImageSelector 
                    onImage={ handlePickImage }
                />
                
                

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default PerfilScreen;

