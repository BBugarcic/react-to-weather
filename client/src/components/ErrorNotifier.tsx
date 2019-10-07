import { default as c } from 'classnames'
import React from 'react'
import '../styles/errorNotifier.scss'

export interface Error {
  config: any
  request: any
  response: any
  isAxiosError: any
  toJSON: any
}

const ErrorNotifier: React.FC<{}> = props => {
  return (
    <div className={c('errorNotifier')}>
      <h5 className={c('message')}>
        Ups, something went wrong. Please try again.
      </h5>
    </div>
  )
}

export default ErrorNotifier
