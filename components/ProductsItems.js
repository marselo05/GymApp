import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import React from "react";

const ProductsItems = ({ item, onSelected }) => {
    return(
        <TouchableOpacity 
            onPress={ () => onSelected(item) }
        >
            <View style={styles.prductItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.shortDescription}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    prductItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title:{
        fontSize: 20,
        fontFamily: 'open-sans-medium'
    },
    details:{
        fontSize: 14
    }
})

export default ProductsItems