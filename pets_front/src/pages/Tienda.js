import React from "react";
import BannerTienda from "../components/BannerTienda";
import CategoriasTienda from "../components/CategoriasTienda";


import '../css/tienda.css'

const Tienda = () => {
  return (
    <div >
      <BannerTienda></BannerTienda>
      <CategoriasTienda>
      </CategoriasTienda>
    </div>
  );
};

export default Tienda;
