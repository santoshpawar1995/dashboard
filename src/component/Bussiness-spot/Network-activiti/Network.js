import React from 'react'
import './Network.css'
import Headre from './headre'
import Chatnetwork from './chatnetwork'
import Campain from './Campain'




const Network = () => {
  return (
    <div className='networkcontainer'>
      <Headre/>
      <div className='chatnetror'>
      <Chatnetwork/>
      <Campain/>
      </div>
     
    </div>
  )
}

export default Network