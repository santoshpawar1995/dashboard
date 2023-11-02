import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Header from './Header'
import './UserInfo.css'
import { useState } from 'react';
import Validation from './Vallidation';
import { Link } from 'react-router-dom';

const UserInfo = () => {
   const initialvalue={firstname:'', lastname:'', username:'', phonenumber:'',
  email:'', password:'', joiningdate :'', employeeid:'', blood:'', designation:'',
   department:'', Role:'', street:'', state:'', city:'',zipcode:'', country:''};

   const [formValues, setFormValue]=useState(initialvalue);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues,  [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(Validation(formValues));
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length == 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  return (
    <div className='userinfo'>
             <Header/>
        
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <div>
          
        <div className='input-container'>
        <form onSubmit={handleSubmit}> 
          <div className='flex'>

         <div className='form1'>
              {/* <Form1/> */}
             
    <h5>User Information</h5>
         <div className='flex-input'>
         <div className='columnrow'>
         {/* <div  >
         
        <input className='inputtext1' type='text' name='firstname' value={formValues.firstname} placeholder='First name' onChange={handleChange}/>
        </div> */}
        <input className='inputfield1' type='text' name='firstname' value={formValues.firstname} placeholder='Firstname' onChange={handleChange}/>
        <p className='error1'>{formErrors.firstname}</p>
        </div>
        <div className='columnrow'>
        <input className='inputfield2' type='text' name='lastname' value={formValues.lastname} placeholder='Lastname' onChange={handleChange}/>
        {/* <div >
        <input className='inputtext1' type='text' name='lastname' value={formValues.lastname} placeholder='Last name'  onChange={handleChange}/>
        </div> */}
        <p className='error1'>{formErrors.lastname}</p>
        </div>
         </div>
         <div >
         <input className='inputfield3' type='text' name='username' value={formValues.username} placeholder='Username'  onChange={handleChange}/>
         </div>
         <p className='error'>{formErrors.username}</p>
         <div >
         <input className='inputfield3' type='number' name='phonenumber' value={formValues.phonenumber} placeholder='Phone-Number'  onChange={handleChange}/>
         </div>
         <p className='error'>{formErrors.phonenumber}</p>
         <div  >
         <input className='inputfield3' type='type' name='email' value={formValues.email} placeholder='Email Address' onChange={handleChange} />
         </div>
         <p className='error'>{formErrors.email}</p>
         
         <div >
         <input className='inputfield3' type='password'name='password' value={formValues.password}  placeholder='Password'  onChange={handleChange}/>
         </div>
         <p className='error'>{formErrors.password}</p>
         </div>

         <div className='form2'>
        
               
   <h5> Employee information</h5>
        <input type='date' name='joiningdate' value={formValues.joiningdate} placeholder='Joining Date' className='inputfield3' onChange={handleChange}/>
        <p className='error'>{formErrors.joiningdate}</p>
         <input type='text' name='employeeid' value={formValues.employeeid} placeholder='Employee ID' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.employeeid}</p>
         <input type='blood' name='bloodgroup'  placeholder='Blood Group' className='inputfield3'  onChange={handleChange}/>
         <p className='error'>{formErrors.bloodgroup}</p>
         <input type='text' name='designation' value={formValues.designation} placeholder='Designation' className='inputfield3' onChange={handleChange} />
         <p className='error'>{formErrors.designation}</p>
         <input type='text' name='department' value={formValues.department} placeholder='Department' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.department}</p>
         <input type='text' name='role'  placeholder='Role' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.role}</p>
</div>
       </div>
       <div className='form3'>
      
      
    <h5>Address information</h5>
         <input type='text' name='street'value={formValues.street} placeholder='Street' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.street}</p>
         <input type='text' name='state' value={formValues.state} placeholder='State' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.state}</p>
         <input type='text' name='city' value={formValues.city} placeholder='City' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.city}</p>
         <input type='text' name='zipcode' value={formValues.zipcode} placeholder='ZipCode' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.zipcode}</p>
         <input type='text' name='country' value={formValues.country} placeholder='Country' className='inputfield3' onChange={handleChange}/>
         <p className='error'>{formErrors.country}</p>
        </div>
       <div className='buttons'>
        <button type='submit' className='submit'> <Link to='/tablle' state={formValues}>Submit</Link> 
        </button>
        <button  className='cancel'>Cancel</button>
    </div>
    </form>  
        </div>
       
       
        </div>
    </div>
  )
}

export default UserInfo