
import React from 'react'
import Addtocart from '../component/addtocart';
import UserTable from '../component/UserTable';

interface Props{
  searchParams:{ sortOrder:string}
}

const UserPage = ({searchParams:{sortOrder}}:Props) => {
 
  return (
    <>
    <h1>users</h1>
  <UserTable sortOrder={sortOrder}/>
  <Addtocart/>
    </>
  )
}

export default UserPage