import BgColor from './components/BgColor'
import { Counter } from './components/Counter'
import ToDoList from './components/ToDoList'
import './style.css'

function App() {
  return (
    <>
    
     <div className='flex flex-col justify-center items-center'>
      <h1 className='mb-3'>To Do List</h1>
      <ToDoList/>
     </div>
    </>
    
  )
}

export default App
