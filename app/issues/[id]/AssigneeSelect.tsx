"use client"
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AssigneeSelect = () => {
  const {data:users,error,isLoading}=useQuery<User[]>({
    queryKey:["users"],
    queryFn:()=> axios.get("http://localhost:3000/api/users").then(res=>res.data)
  })

  if(isLoading) return "Loading..."
  if(error) return null


  return (
    <Select.Root>
        <Select.Trigger placeholder='Assign...'/>
        <Select.Content>

            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                {users?.map(user=>(

                <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>
                ))}

            </Select.Group>



        </Select.Content>



    </Select.Root>
  )
}

export default AssigneeSelect