import React, { Fragment } from 'react'
import '@/styles/globals.css'
import Header from './components/header.js'
import Body from './components/body.js'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  )
}
