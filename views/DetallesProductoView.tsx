import React from 'react';
import {Text, TextInput, View} from "../components/Themed";
import {Producto} from "../models/Producto";
import {TouchableOpacity} from "react-native";

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
        <View>
            <Text>Producto</Text>
            <TextInput value={viewModel.producto.nombre} onChangeText={viewModel.handleNombreChange}
                       editable={viewModel.canEdit}/>
            <TextInput value={viewModel.producto.descripcion} onChangeText={viewModel.handleDescripcionChange}
                       editable={viewModel.canEdit}/>
            <TextInput value={viewModel.producto.cantidad.toString()} onChangeText={viewModel.handleCantidadChange}
                       editable={viewModel.canEdit}/>
            {viewModel.canEdit ? (
                <>
                    <TouchableOpacity onPress={viewModel.handleGuardarPress}>
                        <Text>Guardar Producto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={viewModel.handleCancelarPress}>
                        <Text>Guardar Producto</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <TouchableOpacity onPress={viewModel.handleEditarPress}>
                        <Text>Editar Producto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={viewModel.handleEliminarPress}>
                        <Text>Eliminar Producto</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default DetallesProductoView;