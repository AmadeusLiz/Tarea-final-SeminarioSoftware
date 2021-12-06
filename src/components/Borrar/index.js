import { DeleteButon } from "./styles"

export const Eliminar = ({children, borrarDelCarro, prod}) => {
    return (
        <DeleteButon onClick={() => window.confirm("¿Desea eliminar el producto "+ prod.nombre + "?")?borrarDelCarro(prod):null}>{children}</DeleteButon>
    )
}