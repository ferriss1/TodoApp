
import './App.css'
import { MyTaskBar } from './components/MyTaskBar'
import { Navbar } from './components/Navbar'
import { TaskCard } from './components/NewTask'



function App() {


  return (
    <>
    <div className='flex'>
      <Navbar/>
      <MyTaskBar/>

    </div>
      {/* <TaskCard/> */}
      
    </>
  )
}
export default App
