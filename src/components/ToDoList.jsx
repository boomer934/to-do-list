import { useEffect, useState } from "react"

function ToDoList(){

    const [tasks,setTasks] = useState([])
    const [task,setTask] = useState("")
    const [editIndex,setEditIndex] = useState(null)
    const [editText, setEditText] = useState("")

    function handleSubmit(){
        if(task){
            setTasks([...tasks,task])
            setTask("")
        }
    }

    function handleDelete(index){
        setTasks(tasks.filter((_,i)=> i !== index))
    }

    function handleEdit(index){
        setEditIndex(index)
        setEditText(tasks[editText])
    }

    function handleSave(index){
        const newTasks = [...tasks]
        newTasks[index] = editText
        setTasks(newTasks)
        setEditIndex(null)
        setEditText("")
    }

    return(
        <>
            <div className="flex flex-row gap-4">
                <input
                type="text" 
                name="task" 
                value={task}
                onChange={(e)=>{setTask(e.target.value)}}
                className=' border-2 rounded-md p-2 outline-0' 
                placeholder="Task da aggiungere..."
                />
                <button 
                type="submit" 
                className=" bg-gray-200 rounded-4xl p-2 cursor-pointer"
                onClick={handleSubmit}>aggiungi
                </button>
            </div>
            <div className=" mt-3.5">
                <ul className=" flex flex-col gap-2" id="ulTasks">
                    {tasks.map((t, i) => (
                        <li
                        key={i}
                        className="even:bg-gray-400 not-even:bg-gray-300 rounded-4xl p-1.5 flex flex-row items-center"
                        >
                            {editIndex === i ?(
                                <>
                                    <input 
                                    type="text" 
                                    name="editText" 
                                    placeholder="edit text..."
                                    value={editText}
                                    className=" px-3 outline-0"
                                    onChange={(e)=>setEditText(e.target.value)}/>
                                    <button
                                    onClick={()=>handleSave(i)}
                                    className=" pr-3">save</button>
                                </>
                            ):(
                                <>
                                    <span className=" px-3">{t}</span>
                                    <button
                                    value={i}
                                    onClick={()=>handleDelete(i)}
                                    className=" pr-3 text-red-500">X</button>
                                    <button value={i}
                                    className=" text-sky-400 pr-3"
                                    onClick={()=>handleEdit(i)}>
                                        edit
                                    </button>
                                </>
                            )}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ToDoList