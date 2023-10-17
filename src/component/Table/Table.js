import React, { useState } from 'react'
import './Table.css'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './DataTablesource';
import { Link, useNavigate } from 'react-router-dom';
import Mymodel from './Mymodel';
// import {Link,useNavigate} from 'react-router-dom '
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Table = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(rows)
  // const handleEdit=(id)=>{
  //   setShowModal(id)
  // }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // const handleDelete=(id)=>{
  //   var index=rows.map(function(e){
  //     return e.id
  //   }).indexOf(id);

  //   rows.splice(index,1);
  //   // history('analytics')
  // }
  const actioncolumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellaction'>
            {/* <Link to="admin"> */}
            {/* <button className='viewButton' onClick={()=>setShowModal(params.row.id)}>Edit</button> */}
            {/* <button onClick={()=>setShowModal(params.row.id)} type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Edit
</button>
          {showModal && <Mymodel/>}  */}
         
           
            <button className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</button>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable' >
      {/* <DataGrid
        rows={rows}
        columns={columns.concat(actioncolumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
       
       
        
      /> */}
      <DataGrid
        //  {showModal === params.row.id ?<Mymodel/>:
        rows={data}
        //  }
        columns={columns.concat(actioncolumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 1, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
       <Mymodel/>
    </div>
  )
}

export default Table
