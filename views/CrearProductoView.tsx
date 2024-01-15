import React from 'react';
import {View} from "../components/Themed";
import {SafeAreaView, StyleSheet} from "react-native";
import {Button, TextInput} from 'react-native-paper';
import {Stack} from "expo-router";

type CrearProductoViewModelType = {
    handleNombreChange: (nombre: string) => void,
    handleDescripcionChange: (descripcion: string) => void,
    handleCantidadChange: (cantidad: string) => void,
    handleGuardarProducto: () => void,
}

const CrearProductoView = ({viewModel}: { viewModel: CrearProductoViewModelType }) => {
    return (
        <SafeAreaView style={styles.flex}>
            <Stack.Screen options={{
                title: "Crear Producto"
            }}/>
            <View style={styles.container}>
                <TextInput label={"Nombre"} onChangeText={viewModel.handleNombreChange}/>
                <TextInput label={"Descripción"} onChangeText={viewModel.handleDescripcionChange}/>
                <TextInput label={"Cantidad"} keyboardType={'numeric'} onChangeText={viewModel.handleCantidadChange}/>
                <Button mode={"contained"} onPress={viewModel.handleGuardarProducto}>
                    Guardar Producto
                </Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20,
        gap: 20
    }
})

export default CrearProductoView;