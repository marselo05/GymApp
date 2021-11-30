import {
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";

import React from "react";

const ListItem = (props) => {

    const {
        data,
        onHandlerModal
    } = props

    return(
        <View style={ styles.item } key={data.id}>
            <Text>{data.value}</Text>
            <Button 
                color="red" 
                title="X"
                onPress={ () => onHandlerModal(data.id) } />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ListItem;