import React from 'react'
import Login from '../component/login'

const HomePage = () => {
  return (
    <div>

        <p className='text-sky pt-5 p-9 font-bold text-xl text-center capitalize'>welcome to youreal estate</p>
            <p className='text-center font-semibold text-black text-lg'>login</p>
        <div className='border-gray w-auto  p-8'>
            <form>
                <div className='m-2'>
                    <label htmlFor="email" className=' text-black text-md capitalize p-4'>email:</label>
                    <input type="email"
                    id='email'
                    placeholder='Enter Your Email' 
                    className='border p-1 rounded-md'/>
                </div>

                <div className='m-2'>
                    <label htmlFor="password" className='text-black text-md capitalize p-4'>password:</label>
                    <input type="password"
                    id='password'
                    placeholder='Enter you password' 
                    className='border p-1 rounded-md'/>
                </div>

               <Login/>

            </form>
        </div>



    </div>
  )
}

export default HomePage