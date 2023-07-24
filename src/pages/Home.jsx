import React from 'react'

import UserSearch from "../components/UserSearch"
function Home({users,setUsers,user,setUser}) {
  return (
    <>
    <UserSearch users={users} setUsers={setUsers} user={user} setUser={setUser}/>
   
    </>
  )
}

export default Home