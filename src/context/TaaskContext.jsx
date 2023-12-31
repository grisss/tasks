import { createContext, useState, useEffect} from 'react'
import { tasks as data} from '../data/Task';

export const TaskContext= createContext()
export function TaskContextProvider(props) {
    const [tasks, settasks] = useState([])

    function createTask(task){
        settasks([...tasks, {
        title: task.title,
        id:tasks.lenght,
        description:task.description
        }])
    }


    function deleteTask(taskId){
        settasks(tasks.filter(task => task.id !== taskId))
        }

    useEffect(()=>{
            settasks(data)
        },[])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask,

        }}> {props.children}</TaskContext.Provider>
    )
}


