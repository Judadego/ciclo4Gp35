import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Tienda from "./pages/Tienda";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Registro1 from "./pages/Registro";
import CrearProducto from "./components/producto/crearProducto";
import ActualizarProducto from "./components/producto/actualizarProducto";
import EliminarProducto from "./components/producto/eliminarProducto";
import ProductoIndex from "./components/producto/producto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion logged={false} />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/tienda" element={<Tienda></Tienda>} />

          <Route path="/producto" element={<ProductoIndex></ProductoIndex>}></Route>
          <Route
            path="/producto/create"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route path="/producto/update/">
            <Route
              path=":idProduct"
              element={<ActualizarProducto />}
            ></Route>
          </Route>
          <Route path="/producto/delete/">
            <Route
              path=":idProduct"
              element={<EliminarProducto />}
            ></Route>
          </Route>

          <Route path="registro" element={<Nosotros></Nosotros>} />
          <Route path="contacto" element={<Contacto></Contacto>} />
          <Route path="nosotros" element={<Nosotros></Nosotros>} />
          <Route path="carrito" element={<Carrito></Carrito>} />
          <Route
            path="registro1"
            element={<Registro1 to="/registro1"></Registro1>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
