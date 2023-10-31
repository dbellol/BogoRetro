import { Helmet } from 'react-helmet'
import React from 'react'

const Meta = (props) => {
  return (
    <Helmet>
        <meta charSet='utf-8'></meta>
        <title>{props.title}</title>
    </Helmet>
  )
}

export default Meta