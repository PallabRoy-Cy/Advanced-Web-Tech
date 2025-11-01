import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [productData, setProductData] = useState({
    product: "",
    manufacturer: "",
    price: "",
    quantity: "",
    tags: "",
    pdimg: "",
    description: "",
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/getproduct/${id}`);
        if (!response.ok) {
          throw new Error("Failed to load product");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleChanges = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("product", productData.product);
    formData.append("manufacturer", productData.manufacturer);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("tags", productData.tags);
    formData.append("pdimg", productData.pdimg);
    formData.append("description", productData.description);

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/updateproduct/${id}?_method=PUT`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to update product");
      }
      alert("Product Updated");
      navigate("/myproducts");
    } catch (error) {
      console.error('Error updating product:', error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="formbody">
        <div className="addproductheader">
          <div className="togoback">
            <a href="/myproducts">Go Back</a>
          </div>
        </div>
        <div className="formdiv">
          <form onSubmit={handleChanges}>
            <div className="addpdheader">Update Product</div>
            <div>
              <label htmlFor="product">Product Name</label>
              <input
                type="text"
                onChange={(event) => setProductData({ ...productData, product: event.target.value })}
                name="product"
                defaultValue={productData.product}
              />
            </div>

            <div>
              <label htmlFor="manufacturer">Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                placeholder="Example: Audi"
                defaultValue={productData.manufacturer}
                onChange={(event) => setProductData({ ...productData, manufacturer: event.target.value })}
              />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                defaultValue={productData.price}
                onChange={(event) => setProductData({ ...productData, price: event.target.value })}
                name="price"
                placeholder="In Nrs."
              />
            </div>

            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                defaultValue={productData.quantity}
                onChange={(event) => setProductData({ ...productData, quantity: event.target.value })}
                name="quantity"
              />
            </div>

            <div>
              <label htmlFor="tags">Tags (Comma Separated)</label>
              <input
                type="text"
                name="tags"
                defaultValue={productData.tags}
                onChange={(event) => setProductData({ ...productData, tags: event.target.value })}
                placeholder="Example: Camera, Lens, Photograph etc"
              />
            </div>

            <div className="imagepart">
              <label htmlFor="pdimg">Product Image: </label>
              <input
                type="file"
                onChange={(event) => setProductData({ ...productData, pdimg: event.target.files[0] })}
                name="pdimg"
              />
              <br />
              <br />
              <img
                src={`http://127.0.0.1:8000/${productData.pdimg}`}
                className="pdimage"
                alt="Product Preview"
              />
            </div>

            <div>
              <label htmlFor="description">Product Description</label>
              <textarea
                name="description"
                rows="10"
                defaultValue={productData.description}
                onChange={(event) => setProductData({ ...productData, description: event.target.value })}
                placeholder="Include product's details"
              ></textarea>
            </div>

            <button type="submit">Update Product</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Update;
