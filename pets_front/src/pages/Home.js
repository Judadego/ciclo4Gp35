import React from 'react'
import "../css/home.css"
import CarruselInicio from '../components/CarruselInicio'
import IconosHome from '../components/IconosHome'
import CarruselProductos from '../components/CarruselProductos'
import BannerInicio from '../components/BannersInicio'
import CarruselClientes from '../components/CarruselClientes'



const Home = () => {
    return (
        <div id="home12">
            <CarruselInicio></CarruselInicio>
            <IconosHome></IconosHome>
            <CarruselProductos></CarruselProductos>
            <BannerInicio></BannerInicio>
            <CarruselClientes></CarruselClientes>
        </div>
    )
}

export default Home