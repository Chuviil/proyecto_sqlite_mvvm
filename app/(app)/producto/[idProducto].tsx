import React, {useCallback, useState} from 'react';
import DetallesProductoView from "../../../views/DetallesProductoView";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {Producto} from "../../../models/Producto";
import ProductoRepository from "../../../services/ProductoRepository";

const DetallesProductoViewModel = () => {
    const {idProducto} = useLocalSearchParams();

    const [producto, setProducto] = useState<Producto>({
        idProducto: 0,
        nombre: "",
        cantidad: 0,
        descripcion: ""
    });

    const [canEdit, setCanEdit] = useState<boolean>(false);

    const obtenerProducto = async () => {
        const productoDB = await ProductoRepository.obtenerProducto(Number(idProducto));
        setProducto(productoDB);
    }

    useFocusEffect(useCallback(() => {
        obtenerProducto();
    }, []));

    const handleNombreChange = (nombre: string) => {
        setProducto((prevProducto) => ({...prevProducto, nombre}));
    };

    const handleDescripcionChange = (descripcion: string) => {
        setProducto((prevProducto) => ({...prevProducto, descripcion}));
    };

    const handleCantidadChange = (cantidad: string) => {
        setProducto((prevProducto) => ({...prevProducto, cantidad: Number(cantidad)}));
    };

    const handleEliminarPress = () => {
        ProductoRepository.eliminarProducto(producto.idProducto)
            .then(() => {
                router.back();
            })
    }

    const handleEditarPress = () => {
        setCanEdit(true);
    }

    const handleGuardarPress = () => {
        setCanEdit(false);
    }

    const handleCancelarPress = () => {
        setCanEdit(false);
    }

    const viewModel = {
        producto,
        canEdit,
        handleNombreChange,
        handleDescripcionChange,
        handleCantidadChange,
        handleEliminarPress,
        handleEditarPress,
        handleGuardarPress,
        handleCancelarPress,
    }
    return <DetallesProductoView viewModel={viewModel}/>
};

export default DetallesProductoViewModel;