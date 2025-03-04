"use client";
import React from 'react'

const Addtocart = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
        <button  className='btn btn-primary' onClick={()=>console.log("click")}> add to cart</button>
    </div>
  )
}

export default Addtocart