import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import ProductsItems from '../components/ProductsItems';
import React from "react";
import { useSelector } from 'react-redux';

const Products = ({ navigation, route }) => {
    
    const filteredCategoryProduct = useSelector( state => state.products.filteredProduct )
    const categories    = useSelector( state => state.categories.selected)
    const product       = useSelector( state => state.products.products)
    console.log(filteredCategoryProduct)
    console.log(categories)

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

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={product}
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