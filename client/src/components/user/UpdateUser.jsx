import React, { useEffect, useState } from 'react'
import Header from '../AppHeader'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AddUser() {

    const {id} = useParams()

    const userDetails = {
        fname: '',
        email: '',
    }
    const [user, setUser] = useState(userDetails)
    const handleInput = (event)=>{
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }
  
    
    const navigate = useNavigate()

    useEffect(()=>{
        const getUser = async ()=>{
          const response = await axios.get(`http://localhost:3000/api/user/${id}`)
           .then((response)=>{
           setUser(response.data)
           }).catch(e => console.log(e) )
        }
        getUser()
    },[])



    const updateUser = async (event)=>{
        event.preventDefault()
        await axios.put('http://localhost:3000/api/update/'+id, user)
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
                            <h1>Update User</h1>
                        </div>

                        <form onSubmit={updateUser}>
                        <div className='mt-8 flex flex-col gap-1 w-96'>
                            <h1>Name</h1>
                            <TextField id="outlined-basic" label="Name" value={user.fname} variant="outlined" size='small' name='fname' onChange={handleInput}/>
                            <h1>Email</h1>
                            <TextField id="outlined-basic" label="Email" value={user.email} variant="outlined" size='small'  name='email' onChange={handleInput}/>
                        </div>

                        <div className='my-5 flex justify-center'>
                            <Button variant='contained' type='submit' fullWidth>Update</Button>
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
