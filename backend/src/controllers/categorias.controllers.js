import getConnection from "../db/database.js"

const getCategorias = async (req,res) => {
    try {
        const categorias = await getConnection();
        const result = await categorias.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
    }


}

export const methodHTTP = {
    getCategorias
}