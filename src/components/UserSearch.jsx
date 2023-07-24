import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

function UserSearch({users,setUsers}) {
 

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
   const navigate=useNavigate();

   const  fetchUsers = async (text) =>
{
    
    const response = await fetch(`https://api.github.com/users/${text}`);
    const data= await response.json();

    setUsers(data);

}



  const handleSubmit = (event) => {
    event.preventDefault();
    if (text == "") {
      alert("Ništa niste unijeli.");
    } else {
      
      fetchUsers(text);
      setText("");
     


    }
  };

  return (
    <div className="grid grid-cols-1  mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
        
          <div className="flex flex-col justify-center a-c lg:justify-end mt-2">
          <label>Github username:</label>
            <input
              type="text"
              className="w-1/2 pr-40 bg-gray-300 text-black m-2 p-2 input-lg "
              placeholder="e.g. facebook"
              onChange={handleChange}
            />
         <button className="batun p-2">Pretraži</button>
          </div>
          
        </form>
      </div>
    {Object.keys(users).length > 0 && (

      navigate(`/user/${users.login}`))
 }
    </div>
  );
}

export default UserSearch;
