
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
function AddProduct(){
    const [productInput, setProduct] = useState({
        pname: '',
        brand: '',
        selling_price: '',
        orginal_price: '',
        qty: '',
        image: '',
        error_list: [],
    });
    const [picture,setPicture] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setProduct({...productInput, [e.target.name]: e.target.value});
    }
    const handleImage = (e) =>{
        setPicture({image: e.target.files[0]});
    }
    
    const submitProduct =(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',picture.image);
        formData.append('pname',productInput.pname);
        formData.append('brand',productInput.brand);
        formData.append('selling_price',productInput.selling_price);
        formData.append('orginal_price',productInput.orginal_price);
        formData.append('qty',productInput.qty);
    
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`http://127.0.0.1:8000/api/store-product`,formData).then(res => {
            if(res.data.status === 200)
            {
                Swal.fire("Success",res.data.message,"success");
                document.getElementById('PRODUCT_FORM').reset();
            }
            else if(res.data.status === 422)
            {
                setProduct({...productInput, error_list:res.data.validation_errors});
            }
        });
    });
    }
    return(
        <div className='container-fluid px-4'>
            <h1 className='mt-4'>Add Product</h1>
            
            <form onSubmit={submitProduct} id="PRODUCT_FORM">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                    {/* <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pro-tag-tab" data-bs-toggle="tab" data-bs-target="#pro-tag" type="button" role="tab" aria-controls="profile" aria-selected="false">SEO Tag</button>
                    </li> */}
            </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<div className='form-group mb-3'>
    <label>Product Name</label>
    <input type={"text"} name='pname' onChange={handleInput} value={productInput.pname} className='form-control'/>
    <span>{productInput.error_list.pname}</span>

</div>

<div className='form-group mb-3'>
    <label>Brand</label>
    <input type={"text"} name='brand' onChange={handleInput} value={productInput.brand} className='form-control'/>
    <span>{productInput.error_list.brand}</span>
</div>

<div className='form-group mb-3'>
    <label>Selling Price</label>
    <input type={"text"} name='selling_price' onChange={handleInput} value={productInput.selling_price} className='form-control'/>
    <span>{productInput.error_list.selling_price}</span>

</div>
<div className='form-group mb-3'>
    <label>Orginal Price</label>
    <input type={"text"} name='orginal_price' onChange={handleInput} value={productInput.orginal_price} className='form-control'/>
    <span>{productInput.error_list.orginal_price}</span>

</div>
<div className='form-group mb-3'>
    <label>Quantity</label>
    <input type={"text"} name='qty' onChange={handleInput} value={productInput.qty} className='form-control'/>
    <span>{productInput.error_list.qty}</span>

</div>
<div className='form-group mb-3'>
    <label>Image</label>
    <input type={"file"} name='image' onChange={handleImage} className='form-control'/>
    {/* <span>{picture.image}</span> */}

</div>
            </div>
            
        </div>
        <button type="submit" className="btn btn-primary px-4">Submit</button>
        </form>
    </div>
    )
}
export default AddProduct;