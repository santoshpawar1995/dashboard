import React from 'react'
import './Bussiness.css'
import Header from '../Bussiness-spot/header/Header'
import User from './user/User'
import Network from './Network-activiti/Network'

import Chatnetwork from './Network-activiti/chatnetwork'
import Appversion from './Footer/Appversion'
import Deviceusage from './Footer/Deviceusage'
import Quicksetting from './Footer/QuickSetting'
const Business = () => {
  return (
    <div className='business-contain'>
    {/* <div> */}
      <Header/>
      <User/>
      <Network/>
      <div className='ussagerow'>
       <Appversion/>
       <Deviceusage/>
       <Quicksetting/>
      </div>
     
   {/* </div> */}
    </div>
  )
}

export default Business