import {
    StyleSheet,
    Text,
    View
} from "react-native"

import React from "react"

const DetailProduct = ({ route }) => {

    const producto = route.params.producto

    console.log({producto})

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>{producto.name}</Text>
            <Text>Precio: {producto.price}</Text>
            <Text>{producto.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'open-sans-bold'
    }
})

export default DetailProduct;

