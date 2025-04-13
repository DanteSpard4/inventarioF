const url = "http://localhost:5000/api/categorias";

export const obtainCategorias = async () => {
    try {
        const response = await fetch(url);
        const categorias = await response.json();
        return categorias;
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

