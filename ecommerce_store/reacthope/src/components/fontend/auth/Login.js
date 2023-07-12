
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import Navbar from '../../../layouts/frontend/Navbar';


    const Login = () => {
        const history = useHistory();
        const [loginInput, setLogin] = useState({
            email: '',
            password: '',
            error_list: [],
        });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value})
    } 
    const submitLogin = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
            
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/login`,data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                Swal.fire("Succes",res.data.message,"success");
                history.push('/admin');
            }
            else if(res.data.status === 401)
            {
                Swal.fire("warning",res.data.message,"warning");
            }
            else
            {
                setLogin({...loginInput, error_list: res.data.validation_errors});
            }
        });
    });
    }
    return(
            <div>
                <Navbar/>
                <form onSubmit={submitLogin}>
                <div className='card-header'>
                    <h4>Login</h4>
                </div>
                <div className='card-body'>   
        <div className="form-group mb-3">
            <label >Email address</label>
            <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control"/>
            <span>{loginInput.error_list.email}</span>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="text" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
            <span>{loginInput.error_list.password}</span>
        </div>
        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"/>
            <label>Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
            </div>
    );
}
export default Login;