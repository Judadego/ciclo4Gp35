import { getProductById } from "../../js/getData";
import {  useParams } from "react-router-dom";
function ActualizarProducto(props) {
    //props.productId
    let { idProduct } = useParams();
    let product = getProductById(idProduct);
    if (!product) {
        product = {};
    }
    return (
        <div className="mx-auto text-center m-3 p-3">
        <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <h2>Pagina: Actualizar Producto</h2>
            <div className="w-75 mx-auto text-center">
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="idproductfloating"
                            placeholder="Id Producto"
                            name="product_id"
                            required={true}
                            defaultValue={product.id}
                            readOnly={true}
                        />
                        <label for="idproductfloating">Id producto</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Nombre Producto"
                            name="product_title"
                            minLength={3}
                            required={true}
                            defaultValue={product.title}
                        />
                        <label for="floatingInput">Nombre Producto</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type={"number"}
                            min={0}
                            class="form-control"
                            id="floatingPrice"
                            placeholder="Precio"
                            name="product_price"
                            defaultValue={product.price}
                            required={true}
                        />
                        <label for="floatingPrice">Precio</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingBrand"
                            placeholder="Marca"
                            name="product_brand"
                            minLength={3}
                            required={true}
                            defaultValue={product.brand}
                        />
                        <label for="floatingBrand">Marca</label>
                    </div>
                    <button
                        class="w-100 btn btn-lg btn-outline-success"
                        type="submit"
                    >
                        Actualizar
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ActualizarProducto;