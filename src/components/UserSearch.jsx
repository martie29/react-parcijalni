import React, { useContext, useState } from "react";
import GithubContext from "../context/GithubContext";

function UserSearch() {
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text == "") {
      alert("Unesite nešto u pretragu");
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
      {users.length > 0 && (
        <div className="flex justify-center lg:justify-start">
          <button onClick={clearUsers}>Resetiraj</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
