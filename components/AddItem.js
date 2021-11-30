import {
    Button,
    StatusBar,
    StyleSheet,
    TextInput,
    View
} from 'react-native'

import React from "react";

const AddItem = (props) => {

    const {
        onHandlerChangeItem, 
        textItem, 
        add 
    } = props

    return (
        <View style={ styles.inputContainer }>
            <TextInput placeholder="Item list" 
                style={ styles.input }
                onChangeText={onHandlerChangeItem}
                value={textItem} />
            <Button 
                title="ADD"
                onPress={add}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 200,
        borderBottomColor: "black", 
        borderBottomWidth: 1 
    }
})

export default AddItem;