import React from 'react'
import './bussinesheader.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  return (
    <div className='headcontain'>
    <div className='headrow'>
   <div className='icon'>
   <EmailIcon className='iconemail'/>
   {/* <div className='number'>9</div> */}
  <img src='https://images.yourstory.com/cs/wordpress/2015/10/yourstory-hrithik-roshan.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces' alt='avatar' className='avatarimg'/>
  </div>
  <span style={{fontSize:15}}>hrithik</span>
    <KeyboardArrowDownIcon style={{fontSize:25}}/>
    </div>
    </div>
  )
}

export default Header