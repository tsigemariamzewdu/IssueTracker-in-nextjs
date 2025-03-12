"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import {useSession} from "next-auth/react"
import { Avatar, Box, Container, DropdownMenu, Flex } from '@radix-ui/themes';

const NavBar = () => {
    
  return (
  <nav className=' border-b mb-5 px-5 py-3'>
    <Container>
      <Flex justify='between'>
        <Flex align='center' gap='3'>
          <Link href="/">
            <AiFillBug/>
          </Link>
          <NavLinks/>

          </Flex>
        <AuthStatus/> 
      </Flex>
      
      </Container>
        </nav>
  )
}
const NavLinks=()=>{
  const currentPath=usePathname()
  const {status,data:session}=useSession()
    
    const links=[
        {label:"Dashboard", href:"/",},
        {label:"Issues", href:"/issues",}
    ]
  return(  
   <ul className='flex space-x-6'>
  {links.map(link=>
  <li key ={link.href}><Link  className={`${link.href===currentPath?'text-zinc-900':"text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>{link.label}</Link></li>)}
  
  </ul>)
}
const AuthStatus=()=>{
  const {status,data:session}=useSession()

  if (status==="loading" ) return null
  if (status==="unauthenticated") return <Link href="/api/auth/signin">Login</Link>
  return <Box>

    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
        className='cursor-pointer'
       
        src={session!.user!.image!}
        fallback="?"
        size="2"
        radius='full'
        referrerPolicy='no-referrer'/>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
        
          {session!.user!.email}

        </DropdownMenu.Label>
        <DropdownMenu.Item>

    <Link href="/api/auth/signout">Log out</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>

    </DropdownMenu.Root>
  

 

</Box>
}
export default NavBar