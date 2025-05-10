import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';
import empleadosRoutes from './routes/empleados.router.js';
import productosRoutes from './routes/productos.routes.js';
import cors from 'cors';

const app = express();
app.set("port",5000);
app.use(express.json());
app.use(cors());
app.use("/api/categorias",categoriasRoutes);
app.use("/api/empleados",empleadosRoutes);
app.use("/api/productos",productosRoutes);

app.get("/", (req, res) => {
  res.send("REST API EN RENDER WITHOUT DATABASE ENDPOINTS");
});
export default app;
