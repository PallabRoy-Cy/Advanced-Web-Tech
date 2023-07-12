import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import Navbar from '../../../layouts/frontend/Navbar';
// import {Link} from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });
    
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value})
    }
    const submitRegister =(e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/register`,data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                Swal.fire("Succes",res.data.message,"success");
                history.push('/');
            }
            else
            {
                setRegister({...registerInput, error_list:res.data.validation_errors});
            }
        });
    });
}
    return(
        <div>
            <Navbar/>
            <form onSubmit={submitRegister}>
            <div className='card-header'>
                <h4>Register</h4>
            </div>
            <div className='card-body'>
            <div className="form-group mb-3">
    <label>Full Name</label>
    <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control"/>
    <span>{registerInput.error_list.name}</span>
  </div>    
 <div className="form-group mb-3">
    <label >Email address</label>
    <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
    <span>{registerInput.error_list.email}</span>
  </div>
  <div className="form-group mb-3">
    <label>Password</label>
    <input type="text" name="password" onChange={handleInput} value={registerInput.password} className="form-control"/>
    <span>{registerInput.error_list.password}</span>
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
        
        

    );
}
export default Register;