import * as SQLite from "expo-sqlite"
import {Producto} from "../models/Producto";

function openDatabase() {
    const db: SQLite.SQLiteDatabase = SQLite.openDatabase("productos.db");
    return db;
}

class ProductoRepository {
    private _db: SQLite.SQLiteDatabase;

    constructor() {
        this._db = openDatabase();
        this._db.transaction((tx: SQLite.SQLTransaction) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXIST Productos (idProducto INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nombre TEXT, descripcion TEXT, cantidad INTEGER)"
            );
        });
    }

    public async agregarProducto(producto: Producto): Promise<void> {
        await this._db.transactionAsync
        (
            async (tx: SQLite.SQLTransactionAsync) => {
                await tx.executeSqlAsync
                (
                    "INSERT INTO Productos (nombre, descripcion, cantidad) VALUES (?, ?, ?)",
                    [producto.nombre, producto.descripcion, producto.cantidad]
                )
            }
        )
    }

    public async obtenerProducto(idProducto: number): Promise<Producto> {
        let producto: Producto = {idProducto: 0, nombre: "", descripcion: "", cantidad: 0};

        await this._db.transactionAsync
        (
            async (tx: SQLite.SQLTransactionAsync) => {
                const queryResult = await tx.executeSqlAsync
                (
                    "SELECT * FROM Productos WHERE idProducto = ?",
                    [idProducto]
                );

                if (queryResult.rows.length <= 0) return;

                producto = {...producto, ...queryResult.rows[0]};
            }
        );

        return producto;
    }

    public async obtenerProductos(): Promise<Producto[]> {
        let productos: Producto[] = [];

        await this._db.transactionAsync
        (
            async (tx: SQLite.SQLTransactionAsync) => {
                const queryResult = await tx.executeSqlAsync
                (
                    "SELECT * FROM Productos",
                    [],
                );

                productos = Array.from(queryResult.rows) as Producto[];
            }
        )

        return productos;
    }

    public async actualizarProducto(idProducto: number, producto: Producto): Promise<void> {
        await this._db.transactionAsync
        (
            async (tx: SQLite.SQLTransactionAsync) => {
                await tx.executeSqlAsync
                (
                    "UPDATE Productos SET nombre = ?, descripcion = ?, cantidad = ? WHERE idProducto = ?",
                    [producto.nombre, producto.descripcion, producto.cantidad, idProducto]
                )
            }
        )
    }

    public async eliminarProducto(idProducto: number): Promise<void> {
        await this._db.transactionAsync
        (
            async (tx: SQLite.SQLTransactionAsync) => {
                await tx.executeSqlAsync
                (
                    "DELETE FROM Productos WHERE idProducto =?",
                    [idProducto]
                )
            }
        )
    }
}

export default new ProductoRepository();
