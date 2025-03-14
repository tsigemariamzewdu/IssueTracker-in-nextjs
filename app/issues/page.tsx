
import React from 'react'
import { Table } from '@radix-ui/themes'
import {Link,IssueStatusBadeg} from "@/app/component"


import prisma from '@/prisma/client'

import delay from "delay"
import IssueActions from './IssueActions'

const page = async() => {

  const issues=await prisma.issue.findMany()

  return (
    <div>
     
     <IssueActions/>
     
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>

        </Table.Header>

        <Table.Body>
          {issues.map(issue=>(
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`} >{issue.title}</Link>
                <div className='block md:hidden'><IssueStatusBadeg status={issue.status}/></div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadeg status={issue.status}/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>


            </Table.Row>
          ))}
        </Table.Body>

      </Table.Root>
    </div>

  )
}

export default page