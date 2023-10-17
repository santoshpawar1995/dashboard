import React from 'react'
import './featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chat from './chat';
const Featured = () => {
  return (
    <div className='chat'>
    <div className='featured'>
    
    <div className='top'>
    <h1 className='title'>Total Revenue</h1>
    <span className='morever'><MoreVertIcon fontSize='small'/></span>
    </div>
    <div className='bottom'>
        <div className='featuredchat'>
        <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
           {/* </div>
           <div className="summary"> */}
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$134.4k</div>
            </div>
          </div>
           {/* </div> */}
           {/* <div className="summary"> */}
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
             <span> <KeyboardArrowUpIcon fontSize="small"/></span>
              <div className="resultAmount">$1232.4k</div>
            </div>
          </div>
       

</div>
    </div>
   
    </div>
    <Chat/>
    </div>
 
  )
}

export default Featured