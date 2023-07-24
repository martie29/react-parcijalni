import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router-dom";
import RepoList from "../components/RepoList";
import NotFound from "./NotFound";


function User() {
  const { user, getUser, loading, getRepos, repos,clearUsers } = useContext(GithubContext);
  const { name, avatar_url, bio, login,location,message } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
       {message!=='Not Found' ? (<div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
        </div>
        <div className="grid grid-cols-1  mb-8 gap-8">
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
      </div>) : <NotFound />
  }
    </>
  );
}

export default User;
