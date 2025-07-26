import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import 'D:/REACT PREP/Rent PE/frontend/src/App.css'
import '../Layout/Layout.css'
const Layout = () => {
  return (
    <div>
    <div className="header">
     
        <nav className="container">
            <div className="logo">🏠 Rent Pe</div>
            <ul className="nav-links">
               
                <li><a href="/" > Browse</a></li>
                <li><a href="login" >List Product</a></li>
                <li><a href="/Booking" >My Bookings</a></li>
                <li><a href="/Profile" >Profile</a></li>
            </ul>
            <div className="auth-buttons">
                <a href="#" className="btn btn-secondary" onClick="showPage('login')">Login</a>
                <a href="#" className="btn btn-primary" onClick="showPage('signup')">Sign Up</a>
            </div>
        </nav>
    </div>
    <Outlet/>
    <div className="footer">
   <div className="container">
       <div className="footer-content">
           <div className="footer-section">
               <div className="footer-logo">🏠 Rent Pe</div>
               <p style={{"color":"#d1d5db", "lineHeight":"1.4"}}>
                   Your trusted platform for renting products and services. 
                   Discover, rent, and earn with ease.
               </p>
               <div className="social-links">
                   <a href="#" className="social-link">📘</a>
                   <a href="#" className="social-link">🐦</a>
                   <a href="#" className="social-link">📸</a>
                   <a href="#" className="social-link">💼</a>
               </div>
           </div>
           
           <div className="footer-section">
               <h3>Quick Links</h3>
               <ul>
                   <li><a href="#" onclick="showPage('home')">Home</a></li>
                   <li><a href="#" onclick="showPage('browse')">Browse Products</a></li>
                   <li><a href="#" onclick="showPage('list-product')">List Your Product</a></li>
                   <li><a href="#" onclick="showPage('my-bookings')">My Bookings</a></li>
                   <li><a href="#" onclick="showPage('profile')">My Profile</a></li>
               </ul>
           </div>
           
           <div className="footer-section">
               <h3>Categories</h3>
               <ul>
                   <li><a href="#" onclick="showPage('browse')">Electronics</a></li>
                   <li><a href="#" onclick="showPage('browse')">Vehicles</a></li>
                   <li><a href="#" onclick="showPage('browse')">Tools & Equipment</a></li>
                   <li><a href="#" onclick="showPage('browse')">Events & Party</a></li>
                   <li><a href="#" onclick="showPage('browse')">Sports & Fitness</a></li>
               </ul>
           </div>
           
           <div className="footer-section">
               <h3>Support</h3>
               <ul>
                   <li><a href="#">Help Center</a></li>
                   <li><a href="#">Contact Us</a></li>
                   <li><a href="#">Safety Guidelines</a></li>
                   <li><a href="#">Terms of Service</a></li>
                   <li><a href="#">Privacy Policy</a></li>
               </ul>
           </div>
           
           <div className="footer-section">
               <h3>Contact Info</h3>
               <ul style={{listStyle: 'none', padding: 0}}>
                   <li style={{marginBottom: '0.8rem'}}>
                       <span style={{display:'inline-block',width:'20px'}}>📧</span>
                       <a href="mailto:support@rentpe.com">support@rentpe.com</a>
                   </li>
                   <li style={{marginBottom: '0.8rem'}}>
                       <span style={{display:'inline-block',width:'20px'}}>📞</span>
                       <a href="tel:+911234567890">+91 123 456 7890</a>
                   </li>
                   <li style={{marginBottom: '0.8rem'}}>
                       <span style={{display:'inline-block',width:'20px'}}>📍</span>
                       <span style={{color:' #d1d5db'}}>Mumbai, India</span>
                   </li>
                   <li>
                       <span style={{display:'inline-block',width:'20px'}}>🕒</span>
                       <span style={{color:' #d1d5db'}}>24/7 Support</span>
                   </li>
               </ul>
           </div>
       </div>
       
       <div className="footer-bottom">
           <p>&copy; 2024 Rent Pe. All rights reserved. | Made with ❤️ for the rental community</p>
       </div>
   </div>
</div>



   </div>
  )
}

export default Layout
