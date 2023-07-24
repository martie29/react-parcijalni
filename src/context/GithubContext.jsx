import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer"


const GithubContext = createContext();




export const GithubProvider = ({children})=>{

    const initalState={

        users:[],
        user:{},
        repos:[],
        loading:false,
    };

    const [state,dispatch]=useReducer(GithubReducer,initalState)

/*         const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true); */
const fetchUsers = async (text) =>
{
    setLoading();
    const response = await fetch(`https://api.github.com/users/${text}`);
    const data= await response.json();
    dispatch({
        type:"GET_USERS",
   
        users:data,
    })


   

 
}


    const setLoading = () =>{

        dispatch(
            {
                type:"SET_LOADING",
            }
        )
    }

      const clearUsers = () =>{

        dispatch(
            {
                type:"CLEAR_USERS",
            }


        )
       window.location.href = "/";
    }


    const getUser = async (login) =>
    {

        setLoading();
        const response = await fetch(`https://api.github.com/users/${login}`);
        const data = await response.json();
        dispatch({type:"GET_USER",
        data:data}
        )
    }

    const getRepos = async (login) =>{
        setLoading();

         const response = await fetch(`https://api.github.com/users/${login}/repos`);
        const data = await response.json();
        dispatch({type:"GET_REPOS",
        data:data}
        )

    }

    return (
        <GithubContext.Provider value={{users: state.users,loading: state.loading,user:state.user,repos:state.repos,fetchUsers,clearUsers,getUser,getRepos}}>
        {children}
         </GithubContext.Provider>
    )
}

export default GithubContext;
