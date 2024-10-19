import React from 'react'

import Header from './components/AppHeader'
import User from './components/user/User'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className='font-roboto h-screen bg-blue-100'>
      <Header />
      <div className='w-screen items-center flex flex-col justify-center mt-5'>
        <div className='w-[70%] flex justify-end'>
        <Link to={'/adduser'}><Button variant='outlined'>Create new user </Button></Link> 
        </div>
        <div className='w-[70%] mt-5'>
          <User />
        </div>

      </div>

    </div>

  )
}
