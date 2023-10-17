import React from 'react'
import './Analytics.css'
import Header from './header'
import Featured from './chat-analysis/featured'
import Table from '../Table/Table'
import Tablejsn from './Tablejsn/Tablejsn'




const Analytics = () => {
  return (
    <div >
   <Header/>
 
   <Featured/>
   <div className='tableheader'>
   table
   <div>
   {/* <Table/> */}
   {/* <Tablejsn /> */}
   </div>
   </div>
 </div>
  )
}

export default Analytics