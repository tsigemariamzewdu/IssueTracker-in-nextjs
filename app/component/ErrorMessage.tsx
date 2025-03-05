import React, { PropsWithChildren, ReactNode } from 'react'




const ErrorMessage = ({children}:PropsWithChildren) => {
    if(!children) return null
  return (
    <p>{children}</p>
  )
}

export default ErrorMessage