"use client"
import axios from 'axios';
import { Button, Callout, TextField } from '@radix-ui/themes'
import dynamic from 'next/dynamic'

import "easymde/dist/easymde.min.css";
import {useForm,Controller } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import { createIssueSchema } from '@/app/validationSchema';
import {z} from "zod"
import ErrorMessage from '@/app/component/ErrorMessage';
import Spinner from '@/app/component/Spinner';


type IssueForm=z.infer<typeof createIssueSchema>



const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, 
});

const NewIssuePage = () => {
  const router=useRouter()
  const {register,control,handleSubmit,formState:{errors}}=useForm<IssueForm>({resolver:zodResolver(createIssueSchema)

  })
  const[error,setError]=useState("")
  const [isSubmitting,setIsSubmitting]=useState(false)
  
  return (
    <div className='max-w-xl'>
    {error && <Callout.Root color='red' className='mb-5'>
      <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
    <form className=' space-y-3' 
    onSubmit={handleSubmit(async(data)=>{
      try{
        setIsSubmitting(true)
      await axios.post("/api/issues",data)
      router.push("/issues")}
      catch(error){
        setIsSubmitting(true)
        setError("An unexpected error occured")

      }
    })}>
      <TextField.Root placeholder='Title'{...register("title")}>
       
      </TextField.Root>
      <ErrorMessage> {errors.title?.message}</ErrorMessage>
      <Controller
      name="description"
      control={control}
      render={({field})=><SimpleMDE placeholder='Description'{...field}/>}/>
      <ErrorMessage >{errors.description?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>Submit New Issue{isSubmitting&&<Spinner/>} </Button>
    </form>
    </div>
  )
}

export default NewIssuePage;
