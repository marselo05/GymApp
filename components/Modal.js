import {
    Button,
    Modal,
    StyleSheet,
    Text,
    View
} from 'react-native'

import React from 'react'

const ModalItem = (props) => {

    const { 
        modalVisible, 
        onDelete,
        itemSelected
     } = props

    if (!modalVisible) return null

    return (
        <Modal
            visble={modalVisible} 
            animationType="slide"
        >
            <View style={styles.modalTitle}>
                <Text>Mi modal</Text>
            </View>    
            <View style={styles.modalMessage}>
                <Text>
                    Está seguro que desea borrar?
                </Text>
            </View>
            <View style={styles.modalMessage}>
                <Text style={ styles.modalItem }>
                    {itemSelected.value}
                </Text>
            </View>
            <View style={ styles.modalButton }>
                <Button
                    title="CONFIRMAR"
                    onPress={ onDelete }
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalTitle: {
        backgroundColor: '#ccc',
        color: 'white',
        fontSize: 18
    },
    modalMessage: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButton: {
        marginTop: 15,
    },
    modalItem: {
        fontSize: 30,        
    }
});

export default ModalItem;