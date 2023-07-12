import React, {useEffect, useState} from "react";
import MasterLayout from "./layouts/admin/MasterLayout";
import { Route, Redirect ,useHistory} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPrivateRoute = ({ ...rest}) => {
   
    const history = useHistory();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('/api/checkingAuthenticated').then(res => {
        
            if(res.data.status === 200)
            {
                setAuthenticated(true);
            }
            setLoading(false);
    
        });
        return () => {
            setAuthenticated(false);
        };
    }, []);

    // axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {

    //     if (err.response.status === 401) {
    //         // Swal("Unauthorized",err.response.data.message,"warning");
    //         history.push('/login');
    //     }
    //     return Promise.reject(err);
    // });

    axios.interceptors.response.use(
        response => response,
        error => {
          if (error.response && error.response.status === 401) {
            // Swal("Unauthorized",error.response.data.message,"warning");
            history.push('/login');
          }
          return Promise.reject(error);
        }
      );

    if(loading)
    {
        return <h1>Loading...</h1>
    }
    
    return (
        <Route
        {...rest}
        render={(props) =>
            Authenticated ? (
            <MasterLayout {...props} />
            ) : (
            <Redirect to={{pathname:"/login" }} />
            )
        }
        />
    );
    }
    export default AdminPrivateRoute;