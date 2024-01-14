import React, {useCallback, useState} from 'react';
import {Producto} from "../../models/Producto";
import ProductoRepository from "../../services/ProductoRepository";
import {router, useFocusEffect} from "expo-router";
import ListaProductosView from "../../views/ListaProductosView";

const ListaProductosViewModel = () => {
    const [productos, setProductos] = useState<Producto[]>([]);

    const obtenerProductos = async () => {
        const productosDB = await ProductoRepository.obtenerProductos();
        setProductos(productosDB);
    }

    const handleAgregarButton = () => {
        router.push("/producto/crearProducto");
    }

    const handleCardPress = (idProducto: number) => {
        router.push(`/producto/${idProducto}`);
    }

    useFocusEffect(useCallback(() => {
        obtenerProductos();
    }, []));

    const viewModel= {
        productos,
        handleAgregarButton,
        handleCardPress
    }

    return <ListaProductosView viewModel={viewModel}/>;
};

export default ListaProductosViewModel;
