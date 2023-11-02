import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "./create.css"
// import  'tablecreate.css'
export default function Empcreate() {
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    const[email,emailchange] =useState("");
    const[phone,phonechange] =useState("");
    const navigation = useNavigate();
        const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata = {id,name,email,phone}
       
            fetch(' http://localhost:8080/tabledata',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
            }).then((res)=>{
            return res.json(); 
            })
            .then((res)=>{
                alert('Record inserted');
                navigation('/');
            }).catch((err)=>{
                console.log(err);
            })
           }
  return (
   
            <div className=''>
                <div className='card-title'>
                    <h2>Creating data</h2>
                </div>
                <div className=''>
                <div className='offset-lg-1 col-lg-3'>
                <form onSubmit={handleSubmit}>
                    <div className='row' style={{'textAlign':'left'}}>
                    <div className='container'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='email' value={email} onChange={e=>emailchange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone Number</label>
                                    <input type='number' value={phone} onChange={e=>phonechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                           
                                <div className='button' >
                                    <button type='submit' className=''>Submit</button>
                                    <Link to="/" className='back'>Back</Link>
                                </div>
                         
                    </div>
                </div>
</form>
                </div>
            </div>
        </div>
    
  )
}



// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const CreateData = () => {
//     const[id,idchange] =useState("");
//     const[name,namechange] =useState("");
//     const[email,emailchange] =useState("");
//     const[phone,phonechange] =useState("");
//     const navigation = useNavigate();
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const data = {id,name,email,phone}

//             fetch(' http://localhost:8080/tabledata',{
//             method:"POST",
//             headers:{"content-type":"application/json"},
//             body:JSON.stringify(data)
//             }).then((res)=>{
//             return res.json(); 
//             })
//             .then((res)=>{
//                 alert('Record inserted');
//                 navigation('/');
//             }).catch((err)=>{
//                 console.log(err);
//             })
//            }
//   return (
//     <div>
//          <div>
//       <div className='row'>
//         <div className='container'>
//             <div className='card'>
//                 <div className='card-title'>
//                     <h2>Data Creating</h2>
//                 </div>
//                 <div className='card-body'>
//                 <div className='offset-lg-3 col-lg-6'>
//                 <form onSubmit={handleSubmit}>
//                     <div className='row' style={{'textAlign':'center'}}>
//                     <div className='container'>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label>Name</label>
//                                     <input type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label>Email</label>
//                                     <input type='email' value={email} onChange={e=>emailchange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label>Phone</label>
//                                     <input type='number' value={phone} onChange={e=>phonechange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
//                             <div className='col-lg-12'>
//                                 <div className='form-group' style={{'textAlign':'center'}}>
//                                     <button type='submit' className='btn btn-success m-2'>Submit</button>
//                                     <Link to="/" className='btn btn-danger'>Back</Link>
//                                 </div>
//                             </div>
//                     </div>
//                 </div>
// </form>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//     </div>
  

//     </div>
//   )
// }

// export default CreateData