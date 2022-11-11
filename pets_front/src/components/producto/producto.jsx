import ProductIndex from "./productIndex";
import { getData } from "../../js/getData";

function ProductoIndex(props) {
    let productos = getData("url", {}, "get", {});
    return (
        <div>
            <div className="body-container mx-3 my-2">
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <div>
                    <h3>Tienda</h3>
                    <p>Bienvenido a la pagina principal de productos</p>
                </div>
            </div>
            {/* Componente de tabla y botones */}
            <ProductIndex products={productos} />
        </div>
    );
}

export default ProductoIndex;
