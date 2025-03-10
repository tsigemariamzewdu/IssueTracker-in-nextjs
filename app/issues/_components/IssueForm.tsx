"use client"
import axios from 'axios';
import { Button, Callout, TextField } from '@radix-ui/themes'
import dynamic from 'next/dynamic'

import "easymde/dist/easymde.min.css";
import {useForm,Controller } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import { issueSchema } from '@/app/validationSchema';
import {z} from "zod"
import ErrorMessage from '@/app/component/ErrorMessage';
import Spinner from '@/app/component/Spinner';
import { Issue } from '@prisma/client';


type IssueFormData=z.infer<typeof issueSchema>



const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, 
});



const IssueForm = ({issue}:{issue?:Issue}) => {
  const router=useRouter()
  const {register,control,handleSubmit,formState:{errors}}=useForm<IssueFormData>({resolver:zodResolver(issueSchema)

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
        if (issue)
          await axios .patch("/api/issues/" + issue.id,data)
        else
          await axios.post("/api/issues",data)
      router.push("/issues")}
      catch(error){
        setIsSubmitting(true)
        setError("An unexpected error occured")

      }
    })}>
      <TextField.Root
      defaultValue={issue?.title}
       placeholder='Title'{...register("title")}>
       
      </TextField.Root>
      <ErrorMessage> {errors.title?.message}</ErrorMessage>
      <Controller
      defaultValue={issue?.description}
      name="description"
      control={control}
      render={({field})=><SimpleMDE placeholder='Description'{...field}/>}/>
      <ErrorMessage >{errors.description?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>{issue? "Update Issue":"Submit New Issue"}{" "}{isSubmitting&&<Spinner/>} </Button>
    </form>
    </div>
  )
}

export default IssueForm;
