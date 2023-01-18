import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <h1>hellow world</h1>
     <h1>hellow world</h1>
     <h1>hellow world</h1>
     <h2>{count}</h2>
     <button  onClick={()=>setCount(count+1)}>increase</button>
     <button   onClick={()=>setCount(count-1)}>dencrease</button>

    </div>
  )
}

export default App
