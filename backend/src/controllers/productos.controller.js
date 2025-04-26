import getConnection from "../db/database.js";

const putProductos = async (req, res) => {
    try {
        const productos = await getConnection();
        console.log("id de producto a actualizar ", req.params);
        const { id } = req.params;
        const { ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = req.body;
        const producto = {
            ProductoNombre,
            ProveedorID,
            CategoriaID,
            CantidadPorUnidad,
            PrecioUnitario,
            UnidadesStock,
            UnidadesPedidas,
            NivelReorden,
            Discontinuado
        }
        const result = await productos.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500", error);
    }
}

const getProductos = async (req, res) => {
    try {
        const productos = await getConnection();
        const result = await productos.query(`
            SELECT p.ProductoID, p.ProductoNombre, p.ProveedorID, p.CategoriaID, p.CantidadPorUnidad, 
               p.PrecioUnitario, p.UnidadesStock, p.UnidadesPedidas, p.NivelReorden, p.Discontinuado, 
               c.CategoriaNombre 
            FROM productos p
            INNER JOIN categorias c ON p.CategoriaID = c.CategoriaID
        `);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500", error);
    }
}

export const methodHTTP = {
    getProductos,
    putProductos,
}