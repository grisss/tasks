import { useState ,useContext} from 'react'
import { TaskContext } from '../context/TaaskContext'
import '../estilos/TaskForm.css'

function TaskForm() {
    const [title, settitle] = useState("")
    const[description, setdescription]=useState("")
    const {createTask} = useContext(TaskContext);

    const handleSubmit= (e) =>{
        e.preventDefault();
        createTask({
            title,
            description
        });
        settitle("")
        setdescription("")
    }

    return (
        <div className='cont'>
            <form className='form' onSubmit={handleSubmit}>
            <h2 className='tituloD'>Crea tu tarea</h2>
            <input placeholder="Escribe tu tarea"
            onChange={(e)=>settitle(e.target.value)}
            value={title}
            autoFocus
            className='task'
            />
            <textarea placeholder='Escribe la descripcion de la tarea'
            onChange={(e)=>setdescription(e.target.value)}
            value={description}
            className='description'
            >

            </textarea>
            <button className="save">Guardar</button>
            </form>
            </div>
    )
}

export default TaskForm