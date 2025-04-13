import  { obtainCategorias } from "../apiConnection/consumApi.js";

document.addEventListener('DOMContentLoaded', () => {
    showdata();
});


async function showdata(){

    const categoriasObatained = await obtainCategorias();

    const container = document.querySelector('tbody');
    categoriasObatained.forEach(categoria => {
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = categoria;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td><img src="${Imagen}" width="100px" class="cuenta" ></td>
            <td><button class="btn btn color3" onclick="deleteCategoria(${CategoriaID})">Details</button></td>
            <td><button class="btn btn color2" onclick="deleteCategoria(${CategoriaID})">Edit</button></td>
            <td><button class="btn btn color5" oclick="deleteCategoria(${CategoriaID})">Delete</button></td>
        `;
        container.appendChild(row);
    })
}