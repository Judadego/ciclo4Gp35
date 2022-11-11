import React from "react";
import CardsProductos from "./CardsProductos";
import producto1 from '../images/perro-comida-ringo-croquetas-adulto.jpg'
import producto2 from '../images/accesorio-collar-pañoleta.jpg'
import producto3 from '../images/gato-accesorio-arenero-plastico-con-pala.jpg'
import producto4 from '../images/gato-accesorio-juguete-catnip.jpg'
import producto5 from '../images/perro-accesorio-plato-plegable.jpg'
import producto6 from '../images/1411004.jpg'
import medalla from '../images/medalla.png'
import perro from '../images/dogs.png'
import gato from '../images/post-1-570x461-removebg-preview.png'



const CategoriasTienda = () => {
    return (
        <div className="container">
            <div>
                <img className="img-medalla" src={medalla} alt="" ></img>
                <img src={perro} class=" img-dog" alt="..."></img>
            </div>
            <div className="row row-50">
                <div class="col-lg-4 col-xl-3">
                    <div class="aside row row-30 row-md-50 justify-content-md-between">
                        <div class="aside-item col-12">
                            <h6 class="aside-title text-center">FILTRAR POR PRECIO</h6>
                            <hr />
                        </div>
                        <div>
                            <input type="range" class="rango" id="customRange1" />
                            <button class="btn btn-tienda">Flitrar</button>
                        </div>
                        <div class="aside-item col-sm-6 col-md-5 col-lg-12">
                            <h6 class="aside-title text-center">Categorías</h6>
                            <hr />
                            <ul class="list-shop-filter">
                                <li>
                                    <label class="checkbox-inline">
                                        <input class="form-check-input me-1 form-check-input is-valid" type="checkbox"
                                            value="" id="firstCheckbox" /><span class="checkbox-custom-dummy"></span>Alimento
                                    </label><span class="list-shop-filter-number">(10)</span>
                                </li>
                                <li>
                                    <label class="checkbox-inline">
                                        <input class="form-check-input me-1 form-check-input is-valid " type="checkbox"
                                            value="" id="firstCheckbox" /><span
                                                class="checkbox-custom-dummy"></span>Accesorios
                                    </label><span class="list-shop-filter-number">(10)</span>
                                </li>
                                <li>
                                    <label class="checkbox-inline">
                                        <input class="form-check-input me-1 form-check-input is-valid" type="checkbox"
                                            value="" id="firstCheckbox" /><span class="checkbox-custom-dummy"></span>Jugutes
                                    </label><span class="list-shop-filter-number">(10)</span>
                                </li>
                            </ul>

                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-tienda type= submit"><span class="material-icons">
                                    search
                                </span></button>
                            </form>
                        </div>
                        <div class="aside-item col-sm-6 col-lg-12">
                            <h6 class="aside-title text-center">Productos Destacados</h6>
                            <hr />
                            <div class="row row-10 row-lg-20 gutters-10">
                                <div class="col-4 col-sm-6 col-md-12">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto1} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Ringo Croquetas - 30kg</p>
                                                <p class="product-minimal-price">$115.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-4 col-sm-6 col-md-12 mt-5">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto2} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Collar Pañoleta</p>
                                                <p class="product-minimal-price">$22.500</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-4 col-sm-6 col-md-12 mt-5">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto3} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Arenero Plastico Azul
                                                </p>
                                                <p class="product-minimal-price">$90.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-4 col-sm-6 col-md-12 mt-5 ">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto4} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Juguete Catnip
                                                </p>
                                                <p class="product-minimal-price">$12.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-4 col-sm-6 col-md-12 mt-5">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto5} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Plato Plegable
                                                </p>
                                                <p class="product-minimal-price">$20.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-4 col-sm-6 col-md-12 mt-5">

                                    <article class="product-minimal">
                                        <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div class="unit-left"><a class="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto6} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div class="unit-body">
                                                <p class="product-minimal-title">Alimento Seco Para Gato
                                                </p>
                                                <p class="product-minimal-price">$105.315 - 5Lb</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <img src={gato} alt="" class="img-cat"></img>
                        </div>
                    </div>
                </div>
                <CardsProductos></CardsProductos>
            </div>
        </div>
    );
};

export default CategoriasTienda;