import { IssueStatusBadeg } from '@/app/component'
import { Issue } from '@prisma/client'
import { Heading, Flex, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}:{issue:Issue}) => {
  return (
    <>
    <Heading>{issue.title}</Heading>
    <Flex className='space-x-3' my="2">
    <IssueStatusBadeg status={issue.status}/>
    <p>{issue.createdAt.toDateString()}</p>
    </Flex>
    <Card className='prose' mt="4"><ReactMarkdown>{issue.description}</ReactMarkdown></Card>
    </>
  )
}

export default IssueDetails