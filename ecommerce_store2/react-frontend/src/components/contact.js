import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Your message has been sent");
      console.log(formData);
    } else {
      // Handle invalid form
    }
  };

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
      </p>
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" className="form-control" onChange={handleInputChange} value={formData.name} />
                  <span style={{ color: "red" }}>{formErrors.name}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email">Your email</label>
                  <input type="text" id="email" name="email" className="form-control" onChange={handleInputChange} value={formData.email} />
                  <span style={{ color: "red" }}>{formErrors.email}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <label htmlFor="message">Your message</label>
                  <textarea type="text" id="message" name="message" className="form-control" onChange={handleInputChange} value={formData.message}></textarea>
                  <span style={{ color: "red" }}>{formErrors.message}</span>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            <div className="status"></div>
          </form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Dhaka,Bangladesh</p>
            </li>
            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+880162****43</p>
            </li>
            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>pallabr8@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
