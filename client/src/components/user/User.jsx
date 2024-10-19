import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function DataTable() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const userList = await axios.get('http://localhost:3000/api/users')
            setUsers(userList.data)
        }
        fetchData()
    }, [])

    // delete data
    const handleButtonClick = async(id) => {
        await axios.delete(`http://localhost:3000/api/delete/${id}`)
        .then(()=>{
            setUsers((prevUser)=> prevUser.filter((user)=> user._id !== id))
            toast.success('User permanently delete', {position: 'top-right'})
        }).catch(e => console.log(e))
        
    };


    const columns = [
        { field: '_id', headerName: 'ID', width: 70, flex: 1 },
        { field: 'fname', headerName: 'Name', width: 200, flex: 1, minWidth: 100 },
        { field: 'email', headerName: 'Email', width: 350, flex: 1, minWidth: 200 },
        { field: 'password', headerName: 'Password', width: 250, flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            minWidth: 180,
            flex: 1,
            // Render a button in the Action column
            renderCell: (params) => (
                <div className='flex gap-5 items-center h-[100%]'>
                    <Link to={`/updateuser/` + params.row._id}>
                        <Button variant="outlined" size='small'> Edit  </Button>
                    </Link>

                    <Button onClick={()=>handleButtonClick(params.row._id)} variant='contained' color='error' size='small'>Delete</Button>
                </div>

            ),
        },
    ];




    const paginationModel = { page: 0, pageSize: 10 };


    return (
        <Paper sx={{ width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[10, 50]}
                checkboxSelection
                sx={{ border: 0 }}
                getRowId={(users) => users._id}
            />
        </Paper>
    );
}