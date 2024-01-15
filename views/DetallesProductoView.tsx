import React from 'react';
import {View} from "../components/Themed";
import {Producto} from "../models/Producto";
import {SafeAreaView, StyleSheet} from "react-native";
import {Button, Text, TextInput} from 'react-native-paper';
import {Stack} from "expo-router";

type DetallesProductoViewModelType = {
    producto: Producto,
    canEdit: boolean,
    handleNombreChange: (nombre: string) => void,
    handleDescripcionChange: (descripcion: string) => void,
    handleCantidadChange: (cantidad: string) => void,
    handleEliminarPress: () => void,
    handleEditarPress: () => void,
    handleGuardarPress: () => void,
    handleCancelarPress: () => void,
}

const DetallesProductoView = ({viewModel}: { viewModel: DetallesProductoViewModelType }) => {
    return (
        <SafeAreaView style={styles.flex}>
            <Stack.Screen options={{
                title: "Detalle Producto"
            }}/>
            <View style={styles.container}>
                <Text variant={"headlineLarge"} style={styles.title}>Producto</Text>
                <TextInput label={"Nombre"} value={viewModel.producto.nombre}
                           onChangeText={viewModel.handleNombreChange}
                           editable={viewModel.canEdit}/>
                <TextInput label={"Descripción"} value={viewModel.producto.descripcion}
                           onChangeText={viewModel.handleDescripcionChange}
                           editable={viewModel.canEdit}/>
                <TextInput label={"Cantidad"} value={viewModel.producto.cantidad.toString()}
                           onChangeText={viewModel.handleCantidadChange}
                           editable={viewModel.canEdit}/>
                {viewModel.canEdit ? (
                    <>
                        <Button onPress={viewModel.handleGuardarPress} mode={"contained"}>
                            Guardar Producto
                        </Button>
                        <Button onPress={viewModel.handleCancelarPress} mode={"contained"}>
                            Cancelar
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onPress={viewModel.handleEditarPress} mode={"contained"}>
                            Editar Producto
                        </Button>
                        <Button onPress={viewModel.handleEliminarPress} mode={"contained"}>
                            Eliminar Producto
                        </Button>
                    </>
                )}
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
        gap: 20,
    },
    title: {
        textAlign: "center",
    }
})

export default DetallesProductoView;