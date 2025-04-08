import React, { useEffect, useState } from "react";


export const Todolist = () => {

    const [data, setData] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        if (data.length == 0) setData(['No hay tareas, añadir tareas'])
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, task]);
    }

    const handleClick = (index) => {
        let aux = data.filter((el, i) => i != index)
        setData(aux)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
            </form>
            <ul>
                {data.map((el, i) => <li key={i}>{el}
                    <span onClick={() => handleClick(i)} className="bg-white d-flex">X</span>
                </li>)}
            </ul>
        </div>
    )
}
