import { useState } from "react"

const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '👍' : '👎'}
        </li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    }
    let listadoSecciones = [
        { nombre: 'Instalasiones', visto: true },
        { nombre: "Intalaciones", visto: true },
        { nombre: "Uso de Vie", visto: true },
        { nombre: "Componentes", visto: true },
        { nombre: "Variables", visto: true },
        { nombre: "Redux", visto: false },
        { nombre: "Custom Hooks", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)
    return (
        <>
            <h1>Listado de Temas de Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>

            <button onClick={() => addTask()}> Agregar Tarea</button>
        </>
    )
}
