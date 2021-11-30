import {
    FlatList,
    StyleSheet,
    View
} from "react-native";

import ListItem from "./ListaItem";
import React from "react";

const index = ( props ) => {

    const {
        itemList, 
        onHandlerModal    
    } = props

    return(
        <View style={ styles.items }>
            <FlatList
                data={itemList}
                renderItem={ data => (
                    <ListItem 
                        onHandlerModal={onHandlerModal}
                        data={data.item}
                    />
                )}
                keyExtractor={ (item) => item.id}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#ECECEC',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    
})

export default index