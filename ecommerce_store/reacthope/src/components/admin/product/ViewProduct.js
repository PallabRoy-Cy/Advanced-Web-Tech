
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ViewProduct(){
    const [productList, setProductlist] = useState([]);
    
    useEffect(()=> {
        axios.get(`http://127.0.0.1:8000/api/view-product`).then(res=>{
            console.log(res.data.product);
            if(res.status===200)
            {
                setProductlist(res.data.product)
            }
        });
    },[]);

    var ViewProduct_Table ="";

    ViewProduct_Table =
    productList.map((item) => {
        return (
            <tr key={item.id}>
                <td> {item.id}</td>
                <td> {item.pname}</td>
                <td> {item.brand}</td>
                <td> {item.selling_price}</td>
                <td> {item.orginal_price}</td>
                <td> {item.qty}</td>
                <td><img src={`http://localhost:8000/${item.image}`} width="60px" alt="Image"/></td>
                {/* <td>
                    <Link to={`/admin/edit-product/${item.id}`} className='btn btn-success btn-sm'>Edit</Link>
                </td>
                <td>
                    <button type="button" className='btn btn-success btn-sm'>Delete</button>
                </td> */}
            </tr>
        )
    });

    return (
        <div className='container px-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <h4>Product List
                        <Link to="/admin/addproduct" className="btn btn-primary btn-sm float-end">Add Product</Link>
                    </h4>
                </div>
                <div className='card-body'>
                <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Selling Price</th>
      <th scope="col">Orginal Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Image</th>
      {/* <th scope="col">Edit</th>
      <th scope="col">Delete</th> */}
    </tr>
  </thead>
  <tbody>
  {ViewProduct_Table}
  </tbody>
</table>
                     </div>
                </div> 

        </div>
    )
    

}
export default ViewProduct;