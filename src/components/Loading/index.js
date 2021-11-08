import React from 'react'
import { Spinner } from 'react-bootstrap'

import './styles.scss'

const Loading = () => {
  return (
    <section className='loading'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </section>
  )
}

export default Loading
