import './App.css'
import  Column from './Components/Column'

function App() {

  return (
    <>
      <h1 style={{display: 'flex',justifyContent:"center", background:"grey"}}>KANBAN BOARD</h1>
    <div className='App'>
      <Column state={"PLANNED"}/>
      <Column state={"ONGOING"}/>
      <Column state={"DONE"}/>
    </div>
    </>
  )
}

export default App
