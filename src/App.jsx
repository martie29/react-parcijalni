
import './App.css'
import { GithubProvider } from './context/GithubContext'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import User from './pages/User'



function App() {
  

  return (

   <GithubProvider>
    <Router>
      
    <Routes>
    <Route path="/" exact element={<Home />}/>
    <Route path="/user/:login" exact element={<User />}/>
    <Route path="/*" element={<NotFound />}/>
    </Routes>

    </Router>
    </GithubProvider>
  
  )
}

export default App
