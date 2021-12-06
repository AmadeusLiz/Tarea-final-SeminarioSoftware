import styled from 'styled-components'

export const CarroContenedor = styled.div`
    position: relative;
`

export const BotonCarro = styled.button`
    background-color: #ff8a50;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    margin-top:7px;
`

export const ListaContenedor = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    color: #000;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 50px;
    width: 400px;
`

export const Lista = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const ListaLi = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`