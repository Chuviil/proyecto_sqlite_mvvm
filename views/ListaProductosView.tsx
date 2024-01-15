import React from 'react';
import {View} from "../components/Themed";
import {Producto} from "../models/Producto";
import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Text} from 'react-native-paper';
import {Stack} from "expo-router";

type ListaProductosViewModelType = {
    productos: Producto[],
    handleAgregarButton: () => void,
    handleCardPress: (idProducto: number) => void,
};

const ListaProductosView = ({viewModel}: { viewModel: ListaProductosViewModelType }) => {
    return (
        <SafeAreaView style={styles.flex}>
            <Stack.Screen options={{
                title: "Productos SQLite"
            }}/>
            <View style={styles.container}>
                <Text variant={"headlineLarge"} style={styles.title}>Lista Productos</Text>
                <Button mode={"contained"} onPress={viewModel.handleAgregarButton}>
                    Agregar Producto
                </Button>
                <FlatList
                    data={viewModel.productos}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => viewModel.handleCardPress(item.idProducto)}
                                          key={item.idProducto}
                                          style={styles.card}>
                            <Text variant={"titleMedium"}>{item.nombre}</Text>
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
    },
    title: {
        textAlign: "center",
    },
    container: {
        flex: 1,
        padding: 20,
        gap: 20
    },
    card: {
        marginBottom: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
        padding: 10
    }
})

export default ListaProductosView;