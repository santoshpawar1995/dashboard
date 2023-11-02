import React from 'react'

const Validation = (values) => {
  
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }
    if (!values.lastname) {
        errors.lastname = "lastname is required!";
      }
      if (!values.username) {
        errors.username = "username is required!";
      }
      if (!values.phonenumber) {
        errors.phonenumber = "phone number is required!";
      }
      
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.joiningdate) {
      errors.joiningdate = "joiningdate is required!";
    }
    if (!values.employeeid) {
      errors.employeeid = "employeeid is required!";
    }
    if (!values.bloodgroup) {
      errors.bloodgroup = "bloodgroup is required!";
    }
    if (!values.designation) {
      errors.designation= "designation is required!";
    }
    if (!values.department) {
      errors.department = "department is required!";
    }
    if (!values.role) {
      errors.role= "role is required!";
    }
    if (!values.street) {
      errors.street= "steet is required!";
    }
    if (!values.state) {
      errors.state= "state is required!";
    }
    if (!values.city) {
      errors.city= "city is required!";
    }
    if (!values.zipcode) {
      errors.zipcode= "zipcode is required!";
    }
    if (!values.country) {
      errors.role= "country is required!";
    }
    return errors;
  };

  


export default Validation