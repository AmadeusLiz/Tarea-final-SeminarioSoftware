import { useContext } from 'react'
import { Carro } from '../Carro'
import { NavB } from './styles'
import { Cantidad, Datos } from "../../App"

export const Navbar = ({ borrarDelCarro }) => {

    let cantidad = useContext(Cantidad)
    let productos = useContext(Datos)

    return (
        <NavB>
            <p>Lizzie Castro</p>
            <Carro cantidad={cantidad} productos={productos.carrito} borrarDelCarro={borrarDelCarro} />
        </NavB>
    )
}