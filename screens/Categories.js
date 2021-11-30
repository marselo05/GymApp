import {
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {CATEGORIAS} from '../data/categories'
import GridItem from '../components/GridItem'
import React from 'react'

const Categories = ({navigation}) => {

    const handleSelectedCategory = (item) => {
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
                data={CATEGORIAS}
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