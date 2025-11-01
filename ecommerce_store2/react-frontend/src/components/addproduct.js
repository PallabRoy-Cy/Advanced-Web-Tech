import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddProduct() {

  const [productName, setProductName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tags, setTags] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [description, setDescription] = useState('');
  const [errorList, setErrorList] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'product':
        setProductName(value);
        break;
      case 'manufacturer':
        setManufacturer(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'tags':
        setTags(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleImage = (e) => {
    setProductImage(e.target.files[0]);
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('product', productName);
    formData.append('manufacturer', manufacturer);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('tags', tags);
    formData.append('pdimg', productImage);
    formData.append('description', description);

    try {



      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const token = localStorage.getItem('auth_token');
      document.cookie = `XSRF-TOKEN=${token}; samesite=None; secure`;

      // Proceed with the product submission
      const response = await axios.post('http://localhost:8000/api/addproduct', formData, {
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',  // Adjust content type
      },
      });

      if (response.data.status === 200) {
        //localStorage.setItem('addp_name', response.data.username);
        Swal.fire('Success', response.data.message, 'success');
        clearForm();
      } else if (response.data.status === 422) {
        setErrorList(response.data.validation_errors);
      } else if (response.data.status === 401) {
        Swal.fire('Warning', response.data.message, 'warning');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      
      Swal.fire('Error', 'An error occurred while adding the product. Please try again.', 'error');
    }
  };
    

  const clearForm = () => {
    setProductName('');
    setManufacturer('');
    setPrice('');
    setQuantity('');
    setTags('');
    setProductImage(null);
    setDescription('');
    setErrorList([]);
  };

  return (
    <>
      <div className='container-fluid px-4'>
        <h1 className='mt-4'>Add Product</h1>
        <form onSubmit={submitProduct} method="POST">
          <div className='form-group mb-3'>
            <label>Product Name</label>
            <input
              type='text'
              name='product'
              onChange={handleInput}
              value={productName}
              className='form-control'
            />
            <span>{errorList.product}</span>
          </div>

          <div className='form-group mb-3'>
            <label>Manufacturer</label>
            <input
              type='text'
              name='manufacturer'
              onChange={handleInput}
              value={manufacturer}
              className='form-control'
            />
            <span>{errorList.manufacturer}</span>
          </div>

          <div className='form-group mb-3'>
            <label>Price</label>
            <input
              type='text'
              name='price'
              onChange={handleInput}
              value={price}
              className='form-control'
            />
            <span>{errorList.price}</span>
          </div>

          <div className='form-group mb-3'>
            <label>Quantity</label>
            <input
              type='text'
              name='quantity'
              onChange={handleInput}
              value={quantity}
              className='form-control'
            />
            <span>{errorList.quantity}</span>
          </div>

          <div className='form-group mb-3'>
            <label>Tags (Comma Separated)</label>
            <input
              type='text'
              name='tags'
              onChange={handleInput}
              value={tags}
              className='form-control'
            />
            <span>{errorList.tags}</span>
          </div>

          <div className='form-group mb-3'>
            <label>Image</label>
            <input
              type='file'
              name='pdimg'
              onChange={handleImage}
              className='form-control'
            />
          </div>

          <div className='form-group mb-3'>
            <label>Product Description</label>
            <input
              type='text'
              name='description'
              onChange={handleInput}
              value={description}
              className='form-control'
            />
            <span>{errorList.description}</span>
          </div>

          <button type='submit' className='btn btn-primary px-4'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
