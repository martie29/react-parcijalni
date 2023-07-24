


function NotFound({setUser}) {

  const clearUser = () =>{

       setUser({});
       window.location.href = "/";
    }
 
  return (
    <div className='nema'>
    <div>Stranica nije pronađena ili user s takvim usernameom ne postoji</div>
    <button className="batun" onClick={clearUser}>Resetiraj</button>
    </div>
  )
}

export default NotFound