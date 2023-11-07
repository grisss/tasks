import { TaskContext } from "../context/TaaskContext"
import { useContext } from "react"
import '../estilos/TaskCard.css'

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);
  return (
      <div className="card">
        <h2 className="title">{task.title}</h2>
        <p className="desc">{task.description}</p>
        <button className="delete" onClick={()=> deleteTask(task.id)}>Eliminar</button>
      </div>
  )
}
export default TaskCard