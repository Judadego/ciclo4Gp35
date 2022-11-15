import ProductIndex from "./productIndex";
import { getData } from "../../js/getData";
import "../../css/bannerProductos.css"

function ProductoIndex(props) {
    let productos = getData("url", {}, "get", {});
    return (
        <div > 
            <div id="productBanner">
                <div >
                    <h3>Productos</h3> 
                </div>
            </div>
            {/* Componente de tabla y botones */}
            <ProductIndex products={productos} />
        </div>
    );
}

export default ProductoIndex;
