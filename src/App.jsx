
import './App.css'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import User from './pages/User'
import { useState } from 'react'



function App() {
  

  const [users,setUsers]=useState([])
  const [user,setUser]=useState([])
  const [repos,setRepos]=useState([])

  return (

    <Router>
      
    <Routes>
    <Route path="/" exact element={<Home users={users} setUsers={setUsers} user={user} setUser={setUser} repos={repos} setRepos={setRepos}/>}/>
    <Route path="/user/:login" exact element={<User users={users} setUsers={setUsers} user={user} setUser={setUser} repos={repos} setRepos={setRepos}/>}/>
    <Route path="/*" element={<NotFound setUser={setUser}/>}/>
    </Routes>

    </Router>
    
  
  )
}

export default App
