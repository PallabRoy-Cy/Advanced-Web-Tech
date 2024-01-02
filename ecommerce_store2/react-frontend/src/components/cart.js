import React from "react";
import { useNavigate } from "react-router-dom";
import SubTotal from "./subtotal.js";
import { useCart } from "./cartcontext.js";
import Swal from "sweetalert2";


export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const redirectToLogin = () => {
    Swal.fire({
      icon: 'info',
      title: 'You need to login to check-out',
      text: 'Redirecting to login page...',
    }).then(() => {
      navigate('/login');
    });
  };

  const totalPrice = () => {
    try {
      let total = 0;
      if (cart && cart.length > 0) {
        cart.forEach((item) => {
          total += parseInt(item.price);
        });
      }
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (id) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.id === id);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart_info", JSON.stringify(myCart));
      //redirect to home page if cart is empty
      if (myCart.length === 0) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function getTotal(data, id) {
    console.log("Price is: " + data + " Id is: " + id);
  }

  return (
    <div>
        <div>
          <div>
            {cart?.length > 0 ? (
              <div className="product-body">
                <div className="mypdheader">
                  <p>My Cart</p>
                </div>
                <div className="product-card">
                  {cart.map((item) => (
                    <div key={item.id} className="product-list">
                      <div className="product-image">
                        <img
                          src={"http://127.0.0.1:8000/" + item.pdimg}
                          className="product-image"
                          alt="Logo"
                        />
                      </div>
                      <div className="mypddetails">
                        <h2>{item.product}</h2>
                        <div className="mycartdetails">
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
                      <SubTotal
                        data={item.price}
                        getTotal={getTotal}
                        id={item.id}
                      />
                      <button
                        className="removebutton"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="grandtotalcart">
                  Grand Total: {totalPrice()}
                </div>
                {localStorage.getItem("user") ? (
                <div className="checkoutbutton">
                  <button>Check-out</button>
                </div>
              ) : (
                //onClick Check-out button, redirect to login page
                <div className="checkoutbutton">
                  <button onClick={redirectToLogin}>Check-out</button>
                  </div>
                
              )}
              </div>
            ) : null}
          </div>
        </div>
    </div>
  );
}
