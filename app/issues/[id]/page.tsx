import IssueStatusBadeg from '@/app/component/IssueStatusBadeg'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import ReactMarkdown from "react-markdown"
import {Pencil2Icon} from "@radix-ui/react-icons"
import Link from 'next/link'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './DeleteIssueButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AssigneeSelect from './AssigneeSelect'



interface Props{
    params:{id:string}
}

const IssueDetailPage =async ({params}:Props) => {
  const session =await getServerSession(authOptions)
   const issue =await prisma.issue.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!issue)
        notFound()
  return (
    <Grid columns={{initial:"1", sm:"5"}} gap="5">
      <Box className='md:col-span-4'>
       <IssueDetails issue={issue}/>
        </Box>

        {session && <Box>

          <Flex direction="column" gap="4">
            <AssigneeSelect/>
          <EditIssueButton issueId={issue.id}/>
          <DeleteIssueButton issueId={issue.id}/>
          </Flex>
        </Box>
}





    </Grid>
  )
}

export default IssueDetailPage