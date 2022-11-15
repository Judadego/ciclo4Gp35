import React from "react";
import BannerTienda from "../components/BannerTienda";
import CategoriasTienda from "../components/CategoriasTienda";
import '../css/tienda.css'

function Tienda(props) {
  return (
    <div>
      <BannerTienda></BannerTienda>
      <CategoriasTienda></CategoriasTienda>
    </div>
  );
};

export default Tienda;
