import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import CART from '../data/cart'
import {COLORS} from '../constant/colors'
import CartItem from '../components/CartItem'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

const CartScreen = () => {
    
    console.log('a'+CART)

    // const items = CART;
    const total = 12000;
    
    const handlerConfirmCart = () => console.log('Confirmar carrito')
    const handlerDeleteItem  = () => console.log('Eliminar dem')

    const renderItem = ({item}) => {
        //  console.log(item)
        // <CartItem item={data.item} onDelete={handlerDeleteItem}  />
    }
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.list}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
                
            </SafeAreaView>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.confirm}
                    onPress={handlerConfirmCart}
                >
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
        fontFamily: 'open-sans-regular'
    },
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'open-sans-medium'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'open-sans-regular'
    }
})

export default CartScreen;