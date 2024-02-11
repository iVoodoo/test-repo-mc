import React, { PropsWithChildren } from 'react'

import { Header } from '@components'

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
