import React from 'react'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Class from './Components/Class'
import Users from './Components/Users'
import Querry from './Components/Querry'

function App() {
  return <>
  <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/class' element={<Class/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/querry' element={<Querry/>}/>
      <Route path='*' element={<Navigate to='/dashboard'/>}/>

    </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App