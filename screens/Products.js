import {
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import {PRODUCTOS} from '../data/products'
import ProductsItems from '../components/ProductsItems';
import React from "react";

const Products = ({ navigation, route }) => {

    // const products = PRODUCTOS.filter( producto => ) 
    const renderPrductItem = ({item}) => (
        <ProductsItems
            item={item}
            onSelected={handleSelectedCategory}
        />
    )

    const handleSelectedCategory = (item) => {
        navigation.navigate('DetailProduct', {
            producto: item,
        })
    }
    // console.log({PRODUCTOS})

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={PRODUCTOS}
                keyExtractor={ item => item.id }
                renderItem={ renderPrductItem }
                
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scree: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Products;