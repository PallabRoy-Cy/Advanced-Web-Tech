import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyProducts() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const fetchProductData = () => {
    fetch("http://127.0.0.1:8000/api/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProductData([]);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  async function deleteProduct(id) {
    try {
      let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
        method: "DELETE",
      });
      if (!result.ok) {
        throw new Error("Failed to delete product");
      }
      await result.json();
      fetchProductData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  if (localStorage.getItem("user")) {
    let vendor = JSON.parse(localStorage.getItem("user"));
    let product_id = vendor.id;
    return (
      <div>
        {/* <div className="bodybuttons">
          <Link to="/">
            <button><i class="fa-solid fa-server"></i>All Products</button>
          </Link>

          <Link to="/myproducts">
            <button><i class="fa-solid fa-box-open"></i>My Products</button>
          </Link>

          {localStorage.getItem("user") ? (
            <Link to="/addproduct">
              <button><i class="fa-solid fa-square-plus"></i>Add Product</button>
            </Link>
          ) : (
            <div></div>
          )}
        </div> */}
          <div>
            {productData.length > 0 && (
              <div className="myproductsbody">
                <div className="mypdheader">
                  <p>My Products</p>
                  </div>
                {productData.map((item) => (
                  <>
                    {item.user_id === product_id ? (
                      // console.log(product_id);
                      <div className="prodelements">
                      <div className="mypdlist">
                        <div className="mypdimagediv">
                          <img
                            src={"http://127.0.0.1:8000/" + item.pdimg}
                            className="mypdimage"
                            alt="Logo"
                          />
                        </div>
                        <div className="mypddetails">
                          <h2>{item.product}</h2>
                          <div>
                            <div>
                              <p>Manufacturer: {item.manufacturer}</p>
                              <p>Price: {item.price}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>
                            <div>
                              <p>Tags: {item.tags}</p>
                              <p>Description: {item.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mypdactions">
                          <Link to={"update/" + item.id}>
                            <button className="editbutton">Edit</button>
                          </Link>

                          <button className="deletebutton" onClick={() => deleteProduct(item.id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
      </div>
    );
  } else {
    return navigate("/login");
  }
}
