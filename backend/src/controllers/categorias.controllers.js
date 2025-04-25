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

const postCategorias = async (req,res) => {
    try {
        const categorias = await getConnection();
        const {CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        const result = await categorias.query("INSERT INTO categorias SET ?", category);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
        c
    }
}

const getCategory = async (req,res) => {
    try {
        const categorias = await getConnection();
        console.log("id de categoria a consultar ",req.params);
        const { id } = req.params;
        const result = await categorias.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", [id]);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
    }
}

const deleteCategory = async (req,res) => {
    try {
        const categorias = await getConnection();
        console.log("id de categoria a eliminar ",req.params);
        const { id } = req.params;
        const result = await categorias.query("DELETE FROM categorias WHERE CategoriaID = ?", [id]);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");     
    }
}

const updateCategory = async (req,res) => {
    try {
        const categorias = await getConnection();
        console.log("id de categoria a actualizar ",req.params);
        const { id } = req.params;
        const { CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        const result = await categorias.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
    } 
}

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategory
}