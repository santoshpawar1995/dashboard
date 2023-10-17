import React from 'react'
import './User.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { green } from '@mui/material/colors';
import { UserData } from '../Data/UserData';
const User = () => {
  return (
    <div className='user-container'>
     {UserData.map((item)=>(
        <div className='row'>
       
           <div className='column'>
          
          <div className='icon-row'>
            
           <span> {item.icon }</span>
              <div className='users'>{item.users}</div>
            </div>
            <div className='horizontal-line'> 
           
            <div className='number'>{item.number}</div>
            </div>
            <div className='week-row'>
              <div className='icon-number' style={{color:'green'}}>{item.iconnumber}</div>
              <div className='icon-number' style={{color:'green'}}>{item.icnumber}</div>
              <div>{item.days}</div>
           </div>
           
           </div>
         
        </div>
        ))}
      
        </div>
       
    
  )
}

export default User