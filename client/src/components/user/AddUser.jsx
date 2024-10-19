import React, { useState } from 'react'
import Header from '../AppHeader'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AddUser() {

    const userDetails = {
        fname: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState({userDetails})
    const navigate = useNavigate()

    const handleInput = (event)=>{
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    const submitForm = async (event)=>{
        event.preventDefault()
        await axios.post('http://localhost:3000/api/create', user)
        .then((res)=>{
            console.log(res);
            
            toast.success(res.data.msg, {position: 'top-right'})
            navigate('/')
        }).catch(error=> console.log(error))
    }
    

    return (
        <div className='font-roboto h-screen bg-blue-100'>
            <Header />

            <div className='w-screen flex justify-center'>

                <div className='w-[70%] flex justify-center'>

                    <div className='flex-col p-20 bg-white m-10 rounded-md justify-center'>
                        <div className='flex justify-center font-semibold'>
                            <h1>Create New User</h1>
                        </div>

                        <form onSubmit={submitForm}>
                        <div className='mt-8 flex flex-col gap-1 w-96'>
                            <h1>Name</h1>
                            <TextField id="outlined-basic" label="Name" variant="outlined" size='small' name='fname' onChange={handleInput}/>
                            <h1>Email</h1>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small'  name='email' onChange={handleInput}/>
                            <h1>Password</h1>
                            <TextField id="outlined-basic" label="Password" variant="outlined" size='small' type='password' name='password' onChange={handleInput} />
                        </div>

                        <div className='my-5 flex justify-center'>
                            <Button variant='contained' type='submit' fullWidth>Create</Button>
                        </div>
                        </form>

                        <div className='flex justify-center'>
                            <Link to={'/'}><Button variant='text'> Back </Button></Link>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}
