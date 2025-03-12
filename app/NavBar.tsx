"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import {useSession} from "next-auth/react"
import { Box, Container, Flex } from '@radix-ui/themes';

const NavBar = () => {
    const currentPath=usePathname()
    const {status,data:session}=useSession()
    
    const links=[
        {label:"Dashboard", href:"/",},
        {label:"Issues", href:"/issues",}
    ]
  return (
    <nav className=' border-b mb-5 px-5 py-3'>
      <Container>
      <Flex justify='between'>
        <Flex align='center' gap='3'>
        <Link href="/">
<AiFillBug/>
    </Link>
    <ul className='flex space-x-6'>
        {links.map(link=>
        <li key ={link.href}><Link  className={`${link.href===currentPath?'text-zinc-900':"text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>{link.label}</Link></li>)}
        
        </ul>
        </Flex>
        <Box>
        <Box>
          {status==="authenticated" &&(
            <Link href="/api/auth/signout">Log out</Link>
          )}

          {status==="unauthenticated"&&(
              <Link href="/api/auth/signin">Login</Link>

          )}


        </Box>
        </Box>
        
      </Flex>
      
      </Container>
        </nav>
  )
}

export default NavBar