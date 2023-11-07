import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaaskContext';
import '../estilos/TaskList.css'
function TaskList() {

  const {tasks} = useContext(TaskContext)
  if(tasks.length === 0 ){
    return(
      <h1>No hay tareas</h1>
    )
  }

  return (
    <div className='container'>
        {tasks.map((task) =>(
          <TaskCard key={task.id} task={task}/>
        ))}
    </div>
  )
}
export default TaskList;