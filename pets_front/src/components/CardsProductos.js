import React from "react";
import producto1 from '../images/1411004.jpg'
import producto2 from '../images/evolve-classic-chicken-dog-4lb.png'
import producto3 from '../images/cama-para-mascotas-guamba-donut-azul.png'
import producto4 from '../images/perro-accesorio-lazo-ahogo-cuerda-gruesa.jpg'
import producto5 from '../images/perro-accesorio-hueso-macizo-caucho.jpg'



const CardsProductos = () => {
    return (
        <div class="col-lg-8 col-xl-9">
            <div class="row row-30 row-md-50 row-lg-60">
                <div class="col-12">
                    <article class="product-modern text-center text-sm-left">
                        <div class="unit unit-spacing-0 flex-column flex-sm-row">
                            <div class="unit-left"><a class="product-modern-figure link-img"
                                href="single-product.html"><img src={producto1} alt="" className="producto-img" /></a></div>
                            <div class="unit-body">
                                <div class="product-modern-body">
                                    <h4 class="product-modern-title">Alimento Seco Para Gato Nulo 5Lb</h4>
                                    <div class="product-price-wrap">
                                        <div class="product-price">$105.315 - 5Lb</div>
                                    </div>
                                    <p class="product-modern-text m-5">Nuestra receta libre de granos es rica en nutrientes esenciales provenientes de ingredientes saludables como pavo, bacalao y aceite de salmón, para contribuir con un pelaje hermoso y brillante.</p>
                                    <button class="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span class="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div class="col-12">
                    <article class="product-modern text-center text-sm-left">
                        <div class="unit unit-spacing-0 flex-column flex-sm-row">
                            <div class="unit-left"><a class="product-modern-figure link-img"
                                href="single-product.html"><img src={producto2} alt="" className="producto-img" /></a></div>
                            <div class="unit-body">
                                <div class="product-modern-body">
                                    <h4 class="product-modern-title">Alimento Para Perro Evolve Classic Adulto Pollo - 4 Lb</h4>
                                    <div class="product-price-wrap">
                                        <div class="product-price">$55.900 4Lb</div>
                                    </div>
                                    <p class="product-modern-text m-5">Tiene todos los nutrientes necesarios para una feliz y saludable vida. Evolve es rico en nutrientes y contiene proteínas de alta calidad, carbohidratos complejos, vegetales, minerales, vitaminas, aceites y grasas.</p>
                                    <button class="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span class="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div class="col-12">
                    <article class="product-modern text-center text-sm-left">
                        <div class="unit unit-spacing-0 flex-column flex-sm-row">
                            <div class="unit-left"><a class="product-modern-figure link-img"
                                href="single-product.html"><img src={producto3} alt="" className="producto-img" /></a></div>
                            <div class="unit-body">
                                <div class="product-modern-body">
                                    <h4 class="product-modern-title">Cama Para Mascotas Guamba Donut Azul - Pequeña</h4>
                                    <div class="product-price-wrap">
                                        <div class="product-price">$93.005</div>
                                    </div>
                                    <p class="product-modern-text m-5">Elaborada en tela peluche y relleno de fibra siliconada que nunca se deforma.Elaborada en tela peluche y relleno de fibra siliconada que nunca se deforma.</p>
                                    <button class="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span class="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>


                <div class="col-12">
                    <article class="product-modern text-center text-sm-left">
                        <div class="unit unit-spacing-0 flex-column flex-sm-row">
                            <div class="unit-left"><a class="product-modern-figure link-img"
                                href="single-product.html"><img src={producto4} alt="" className="producto-img" /></a></div>
                            <div class="unit-body">
                                <div class="product-modern-body">
                                    <h4 class="product-modern-title">Lazo Ahogo Cuerda Gruesa</h4>
                                    <div class="product-price-wrap">
                                        <div class="product-price">$27.115</div>
                                    </div>
                                    <p class="product-modern-text m-5">Ya sea que su perro vaya a buscar, agarre y corra o se quede a su lado con la mirada perdida. Un aro con cuerda es un complemento clave para cualquiera de las aventuras de su perro.</p>
                                    <button class="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span class="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div class="col-12">
                    <article class="product-modern text-center text-sm-left">
                        <div class="unit unit-spacing-0 flex-column flex-sm-row">
                            <div class="unit-left"><a class="product-modern-figure link-img"
                                href="single-product.html"><img src={producto5} alt="" className="producto-img" /></a></div>
                            <div class="unit-body">
                                <div class="product-modern-body">
                                    <h4 class="product-modern-title">Hueso Macizo Juguete De Caucho</h4>
                                    <div class="product-price-wrap">
                                        <div class="product-price">$20.400</div>
                                    </div>
                                    <p class="product-modern-text m-5">Dale un hueso a tu perro. Un hueso de caucho natural. Este resistente juguete para masticar está hecho de goma gruesa y elástica y es adecuado para los masticadores más pesados.</p>
                                    <button class="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span class="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>


            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CardsProductos;