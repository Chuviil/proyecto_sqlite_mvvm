import React from 'react';
import {Text, View, TextInput} from "../components/Themed";
import {TouchableOpacity} from "react-native";

type CrearProductoViewModelType = {
    handleNombreChange: (nombre: string) => void,
    handleDescripcionChange: (descripcion: string) => void,
    handleCantidadChange: (cantidad: string) => void,
    handleGuardarProducto: () => void,
}

const CrearProductoView = ({viewModel}: {viewModel: CrearProductoViewModelType}) => {
    return (
        <View>
            <Text>Nombre</Text>
            <TextInput onChangeText={viewModel.handleNombreChange}/>
            <Text>Descripción</Text>
            <TextInput onChangeText={viewModel.handleDescripcionChange}/>
            <Text>Cantidad</Text>
            <TextInput keyboardType={'numeric'} onChangeText={viewModel.handleCantidadChange}/>
            <TouchableOpacity onPress={viewModel.handleGuardarProducto}>
                <Text>Guardar Producto</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CrearProductoView;