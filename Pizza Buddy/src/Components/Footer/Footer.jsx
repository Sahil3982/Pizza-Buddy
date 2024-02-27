import React from 'react';
import 'Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>123 Pizza Street, Pizza Town</p>
            <p>Email: info@pizzawebsite.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; {new Date().getFullYear()} PizzaWebsite. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
