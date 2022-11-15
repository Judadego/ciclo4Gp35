import { getProductById } from "../../js/getData";
import { Link, useParams } from "react-router-dom";
import '../../css/formularios.css'
import banner from '../../images/bg-image-5.jpg'
function EliminarProducto(props) {
    //props.productId
    let { idProduct } = useParams();
    let product = getProductById(idProduct);
    if (!product) {
        product = {};
    }
    return (
        <div>
            <div>
                <img src={banner} className="img-banner" alt=""></img>
            </div>
            <div className="mx-auto text-center m-3 p-3">
            <h2 className="titilo-actualizar">Eliminar Producto</h2>
            <div className="w-75 mx-auto text-center">
                <form>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="idproductfloating"
                            placeholder="Id Producto"
                            name="product_id"
                            required={true}
                            defaultValue={product.id}
                            readOnly={true}
                        />
                        <label for="idproductfloating">Id producto</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Nombre Producto"
                            name="product_title"
                            minLength={3}
                            required={true}
                            defaultValue={product.title}
                            readOnly={true}
                        />
                        <label for="floatingInput">Nombre Producto</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Descripción"
                            name="product_descripción"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingInput">Descripción</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type={"number"}
                            min={0}
                            className="form-control"
                            id="floatingPrice"
                            placeholder="Precio"
                            name="product_price"
                            defaultValue={product.price}
                            required={true}
                            readOnly={true}
                        />
                        <label for="floatingPrice">Precio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingBrand"
                            placeholder="Marca"
                            name="product_brand"
                            minLength={3}
                            required={true}
                            defaultValue={product.brand}
                            readOnly={true}
                        />
                        <label for="floatingBrand">Marca</label>
                    </div>
                    <button
                        className="w-100 btn btn-lg btn-outline-danger"
                        type="button"
                    >
                        Eliminar
                    </button>
                    <Link to={'/producto'}><button
                        className="btn btn-outline-dark m-5"
                    >
                        Regresar
                    </button></Link>
                </form>
            </div>
        </div>
        </div>
    );
}
export default EliminarProducto;
