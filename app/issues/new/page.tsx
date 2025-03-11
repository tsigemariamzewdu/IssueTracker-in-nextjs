
"use client"

import dynamic from 'next/dynamic'

const IssueForm=dynamic(
  ()=>import('../../issues/_components/IssueForm'),
  {ssr:false}
)
const NewIssuePage = () => {
  return (
    <IssueForm/>
  )
}

export default NewIssuePage