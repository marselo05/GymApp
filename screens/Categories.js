import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { filterProduct, selectProduct } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'

import GridItem from '../components/GridItem'
import { selectCategory } from '../store/actions/category.actions'

const Categories = ({navigation}) => {

    const dispatch = useDispatch()
    const categoryProducts = useSelector( state => state.products.filterProduct )
    const categorias = useSelector( state => state.categories.categories )

    console.log(categoryProducts)

    useEffect( () => {
        dispatch( filterProduct( categorias.id ) )
    },[] )

    const handleSelectedCategory = (item) => {
        dispatch( selectCategory(item.id) )
        navigation.navigate('Products', {
            categoryId: item.id,
            name: item.title,
        })
    }

    const renderGridItem = ({item}) => (
        <GridItem
            item={item}
            onSelected={handleSelectedCategory}
        />
    )
    
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categorias}
                keyExtractor={ item => item.id }
                renderItem={ renderGridItem }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Categories;