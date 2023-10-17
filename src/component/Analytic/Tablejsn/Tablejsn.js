import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Tablejsn = () => {
    const [data, setData] = useState([])
    const navigation=useNavigate();
    const HandleEdit = (id) =>{
 
        navigation('/edit/'+id)
    
    }
    const Handledelete=(id)=>{
        if(window.confirm('Do you want to delete')){
           fetch('http://localhost:8080/tabledata/'+ id,{
            method:"DELETE",
           
            })
            .then((res)=>{
                alert('Data deleted');
                navigation('/');
                window.location.reload(false)
            }).catch((err)=>{
                console.log(err);
            })
           }
        }
    
    useEffect(() => {
        axios.get('  http://localhost:8080/tabledata')
            .then(res => setData(res.data))
            .catch(res => console.log(res))
    }, []);
    data.forEach(item => {
        console.log(item);
    })
    return (
        <div>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                        <h2>React Js Crud operation</h2>
                    </div>
                    <div className='card-body'>
                    <Link to='/create' className='btn btn-success mb-3'>Create</Link>
                        <table className='table table-bordered'>
                       
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone_Number</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    data.map((item, index) => (

                                        <tr key={index} >

                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <button onClick={()=>HandleEdit(item.id)} className='btn btn-dark' type='submit'>Edit</button>
                                                <button onClick={()=>Handledelete(item.id)} className='btn btn-danger' type='submit'>delete</button>
                                            </td>

                                        </tr>

                                    )
                                    )

                                }



                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tablejsn