import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RepoList from "../components/RepoList";
import NotFound from "./NotFound";


function User({ user, repos,setRepos,setUser }) {

  const { name, avatar_url, bio, login,location,message } = user;


  const getUser = async (login) =>
    {

        
        const response = await fetch(`https://api.github.com/users/${login}`);
        const data = await response.json();
       setUser(data);
    }

    const getRepos = async (login) =>{
        

         const response = await fetch(`https://api.github.com/users/${login}/repos`);
        const data = await response.json();
        setRepos(data)

    }

  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  
const clearUsers = () =>{

       setUser([])
       window.location.href = "/";
    }

  return (
    <>
       {message!=='Not Found' ? (<div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
        </div>
        <div className="grid grid-cols-1 mb-8 gap-8">
          <div className="custom-card-image mb-6 md:mb-0 flex">
            <div className="rounded-lg shedow-xl card">
              <figure>
                <img className="slika" src={avatar_url} alt={login} />
              </figure>
            </div>
            <div className="ime">
            <h1 className="card-title mb-0">{name}</h1>
            </div>
          </div> 
           <h2 className="card-title mb-0"><b>BIO:</b> {bio}</h2>
          <h2 className="card-title mb-0"><b>LOCATION:</b> {location}</h2>
        </div>
      
        <RepoList className='repozitoriji' repos={repos} />
              <div className="flex justify-center  batun">
          <button onClick={clearUsers} >RESET</button>
        </div>
      </div>) : <NotFound setUser={setUser}/>
  }
    </>
  );
}

export default User;
