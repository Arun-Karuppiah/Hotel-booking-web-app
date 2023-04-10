import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="phone-number">
          <h3>Phone Number</h3>
          <p>+91 9786490999</p>
        </div>
        <div className="whatsapp-number">
          <h3>WhatsApp Number</h3>
          <p>+91 9567856780</p>
        </div>
        <div className="instagram-id">
          <h3>Instagram ID</h3>
          <p>@tajhotels_cbe</p>
        </div>
        <div className="facebook-id">
          <h3>Facebook ID</h3>
          <p>@tajhotels_cbe</p>
        </div>
        <div className="facebook-id">
          <h3>Address</h3>
          <p>No:27,2nd st,T.Nagar,RS Puram,Coimbatore-641045</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
