import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const empleados = await getConnection();
        const result = await empleados.query("SELECT EmpleadoID, Apellido, Nombre, Titulo , TituloCortesia, FechaNacimiento, FechaContratacion , Telefono, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados");
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
    }
}

const postEmpleados = async (req, res) => {
    try {
        const empleados = await getConnection();
        const { Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe } = req.body;
        const empleado = {
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Telefono,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe
        }
        const result = await empleados.query("INSERT INTO empleados SET ?", empleado);
        res.json(result);
    } catch (error) {
        console.log("ERROR 500");
        console.log(error);
    }
}

export const methodHTTP = {
    getEmpleados,
    postEmpleados,
    // getEmpleado,
    // deleteEmpleado,
    // updateEmpleado
}