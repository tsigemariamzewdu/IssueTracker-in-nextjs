"use client"
import { Button, TextField } from '@radix-ui/themes'
import dynamic from 'next/dynamic'

import "easymde/dist/easymde.min.css";


const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, 
});

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title'>
       
      </TextField.Root>
      <SimpleMDE placeholder='Description'/>
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage;
