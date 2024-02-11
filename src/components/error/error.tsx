import React from 'react'

import styles from './error.module.scss'

type ErrorType = {
  title: string
  message: string
  resolution: string
}

export const Error: React.FC<ErrorType> = ({ message, resolution, title }) => {
  return (
    <div className={styles.error}>
      <p>{title}</p>
      <p>{message}</p>
    </div>
  )
}
