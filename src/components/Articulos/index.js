import { Articulo } from "../Articulo";
import { Container, H4 } from "./styles";

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const erased=props.erased.current
    console.log(erased);
    return (
        <Container>
            {erased?<H4>Eliminó: {erased}</H4>:null}
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
    </Container>
    )
}