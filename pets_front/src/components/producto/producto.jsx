import ProductIndex from "./productIndex";
import { getData } from "../../js/getData";
import "../../css/bannerProductos.css"

function ProductoIndex(props) {
    let productos = getData("url", {}, "get", {});
    return (
        <div > <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* No es profesional todos estos br, pero sirven mientras soluciono el problema */}
        
            <div id="productBanner" className="resize body-container mx-3 my-2">
                
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br><br></br>
                <div >
                    <h3>Productos</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <br></br>
            </div>
            {/* Componente de tabla y botones */}
            <ProductIndex products={productos} />
        </div>
    );
}

export default ProductoIndex;
