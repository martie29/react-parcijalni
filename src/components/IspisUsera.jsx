
/* import Spinner from "./Spinner" */
import { useContext, useEffect } from 'react';

import GithubContext from "../context/Githubcontext"
import { useNavigate } from 'react-router-dom';

    


function IspisUsera() {

    const {users,loading} =useContext(GithubContext)
const navigate=useNavigate();

console.log(users)

{Object.keys(users).length > 0 && (

      navigate(`/user/${users.login}`))
 }

  
  


}

export default IspisUsera