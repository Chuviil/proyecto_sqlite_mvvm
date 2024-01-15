import React, {useState} from 'react';
import ProductoRepository from '../../../services/ProductoRepository';
import {router} from 'expo-router';
import {Producto} from '../../../models/Producto';
import CrearProductoView from "../../../views/CrearProductoView";

const CrearProductoViewModel = () => {
    const [producto, setProducto] = useState<Producto>({
        idProducto: 0,
        nombre: '',
        descripcion: '',
        cantidad: 0,
    });

    const handleNombreChange = (nombre: string) => {
        setProducto((prevProducto) => ({...prevProducto, nombre}));
    };

    const handleDescripcionChange = (descripcion: string) => {
        setProducto((prevProducto) => ({...prevProducto, descripcion}));
    };

    const handleCantidadChange = (cantidad: string) => {
        setProducto((prevProducto) => ({...prevProducto, cantidad: Number(cantidad)}));
    };

    const handleGuardarProducto = async () => {
        await ProductoRepository.agregarProducto(producto);
        router.back();
    };

    const viewModel = {
        handleNombreChange,
        handleDescripcionChange,
        handleCantidadChange,
        handleGuardarProducto,
    }

    return <CrearProductoView viewModel={viewModel}/>
};

export default CrearProductoViewModel;
