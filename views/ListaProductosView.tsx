import React from 'react';
import {Text, View} from "../components/Themed";
import {Producto} from "../models/Producto";
import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";

type ListaProductosViewModelType = {
    productos: Producto[],
    handleAgregarButton: () => void,
    handleCardPress: (idProducto: number) => void,
};

const ListaProductosView = ({viewModel}: { viewModel: ListaProductosViewModelType }) => {
    return (
        <SafeAreaView style={styles.flex}>
            <View>
                <Text>Lista Productos</Text>
                <TouchableOpacity onPress={viewModel.handleAgregarButton}>
                    <Text>Agregar Producto</Text>
                </TouchableOpacity>
                <FlatList
                    data={viewModel.productos}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => viewModel.handleCardPress(item.idProducto)} key={item.idProducto}
                              style={{marginBottom: 10, borderStyle: "solid", borderWidth: 1, borderColor: "white"}}>
                            <Text>{item.nombre}</Text>
                            <Text>{item.descripcion}</Text>
                            <Text>{item.cantidad}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
})

export default ListaProductosView;