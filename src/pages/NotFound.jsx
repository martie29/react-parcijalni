import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router-dom";
import RepoList from "../components/RepoList";


function NotFound() {
  const {  clearUsers } = useContext(GithubContext);
  return (
    <div className='nema'>
    <div>Stranica nije pronađena ili user s takvim usernameom ne postoji</div>
    <button className="batun" onClick={clearUsers}>Resetiraj</button>
    </div>
  )
}

export default NotFound