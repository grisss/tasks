import TaskList from './components/TaskList'
import React from 'react'
import TaskForm from './components/TaskForm.jsx'
import LandingPage from './components/LandingPage.jsx'
import './index.css'

function App() {
  return (
    <main>
      <LandingPage/>
      <TaskForm/>
      <TaskList/>
    </main>
  )
}
export default App;