"use client"
import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div>
        <Link href='/User'>
        <button className='btn btn-primary ' onClick={(e)=>{
            e.preventDefault()
            console.log("you clicked")}}>Login</button></Link>
    </div>
  )
}

export default Login