import React, {useState} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import AddItem from './components/AddItem'
import AppLoading from 'expo-app-loading';
import Index from './components/Lista/index';
import ModalItem from './components/Modal'
import ShopNavigator from './navigation/ShopNavigator';
import {useFonts} from 'expo-font'

export default function App() {
    const [loaded] = useFonts({
        'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
        'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!loaded) return <AppLoading />

    // const [textItem, setTextItem] = useState('pan')
    // const [itemList, setItemList] = useState([])    

    // Manejo de modal
    // const [itemSelected,  setItemSelected] = useState({})
    // const [modalVisible, setModalVisible] = useState(false)

    const onHandlerChangeItem = (value) => { setTextItem(value) }
    
    // Agrega un nuevo registro a la lista
    const add = () => {
        const item = {
            id:     Math.random().toString(),
            value:  textItem
        }
        setItemList( currenItems => [
            ...currenItems,
            item
        ])

        setTextItem()
    }

    // Abre modal de consulta eliminación
    const onHandlerModal = id => {
        setItemSelected( itemList.filter( item => item.id === id)[0] )
        setModalVisible(!modalVisible)
    }
    // Elimina el registro seleccionado de la lista
    const onHandlerDelete = id => {
        setItemList( currenItems => currenItems.filter(item => item.id !== id) )
        setItemSelected({})
        setModalVisible(!modalVisible)
    }

    return (
        <ShopNavigator />
        // <View style={ styles.screen }>
        //     <AddItem 
        //         onHandlerChangeItem={onHandlerChangeItem}
        //         textItem={textItem}
        //         add={add}
        //     />
        //     <Index 
        //         itemList={itemList}
        //         onHandlerModal={onHandlerModal}
        //     />
        //     <ModalItem 
        //         modalVisible={modalVisible}
        //         onDelete={(id) => onHandlerDelete(itemSelected.id)}
        //         itemSelected={itemSelected}
        //     /> 
        // </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
    }
});
