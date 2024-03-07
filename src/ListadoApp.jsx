import { useState } from "react"

const Items = ({nombre, visto}) => {
    return(
        <li>{nombre}
        {visto ? '👍' : '👎'}</li>
    )
}

export const ListadoApp = () => {
    let listadoSecciones =[
        {nombre:'Instalasiones', visto: true},
{nombre: "Intalaciones", visto : true},
{nombre: "Uso de Vie", visto : true},
{nombre: "Componentes", visto : true},
{nombre: "Variables", visto : true},
{nombre: "Redux", visto : false},
{nombre: "Custom Hooks", visto : false}   
    ]
    const [arreglo, setArreglo] = useState([])
  return (
    <>
    <h1>Listado de Temas de Curso</h1>
    <ol>
        <Items nombre="Intalaciones" visto={true}></Items>
        <Items nombre="Uso de Vie" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables" visto={true}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="Custom Hooks" visto={false}></Items>
    </ol>
    </>
  )
}
