import React from 'react'
import Banner_inicio from '../components/Banners_inicio.jsx'
import Carrusel_clientes from '../components/Carrusel_clientes'
import Carrusel_inicio from '../components/Carrusel_inicio'
import Carrusel_productos from '../components/Carrusel_productos'
import Inicio_Iconos from '../components/Inicio_Iconos'



const Home = () => {
    return (
        <div>
            <Carrusel_inicio></Carrusel_inicio>
            <Inicio_Iconos></Inicio_Iconos>
            <Carrusel_productos></Carrusel_productos>
            <Banner_inicio></Banner_inicio>
            <Carrusel_clientes></Carrusel_clientes>

        </div>
    )
}

export default Home