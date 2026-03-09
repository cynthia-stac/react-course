import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {MyButton} from './App.jsx'
import {Counter} from './App.jsx'
import {Car} from './App.jsx'
import {Fruit} from './App.jsx'
import {Son} from './App.jsx'
import { Daughter } from './App.jsx'
import { Parent } from './App.jsx'
import { MissedGoal } from './App.jsx'
import { MadeGoal } from './App.jsx'
import { Goal } from './App.jsx'
import MyForm from './components/Form.jsx'
import Todo from './components/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyForm /> */}
    
   <Todo />
    
  </StrictMode>,
)
