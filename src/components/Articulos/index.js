import { Articulo } from "../Articulo";
import { Container, H4 } from "./styles";
import { useEffect } from 'react'


export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const erased = props.erased.current
    
    useEffect(() => {
       if(erased){
           window.alert('Producto eliminado de la lista ' + erased)
       }
    }, [erased]);

    return (
        <Container>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
    </Container>
    )
}