import React from 'react'
import './Home.css'
function Home() {
  return (
    
       <div id="home" className="page active">
        <section className="hero">
            <div className="container">
                <h1>Rent Anything, Anytime</h1>
                <p>Discover thousands of products and services available for rent. From electronics to vehicles, find what you need when you need it.</p>
                
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="What are you looking for?"/>
                    
                    <select className="form-control">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Vehicles</option>
                        <option>Tools</option>
                        <option>Events</option>
                    </select>
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </section>

        <div className="container">
            <h2 style={{textAlign: 'center' ,marginBottom: '2rem'}}>Popular Categories</h2>
            <div className="categories">
                <div className="category-card" >
                    <div className="category-icon">📱</div>
                    <h3>Electronics</h3>
                    <p>Cameras, laptops, phones, and more</p>
                </div>
                <div className="category-card" >
                    <div className="category-icon">🚗</div>
                    <h3>Vehicles</h3>
                    <p>Cars, bikes, scooters for rent</p>
                </div>
                <div className="category-card" >
                    <div className="category-icon">🔧</div>
                    <h3>Tools & Equipment</h3>
                    <p>Power tools, construction equipment</p>
                </div>
                <div className="category-card" >
                    <div className="category-icon">🎉</div>
                    <h3>Events & Party</h3>
                    <p>Decorations, sound systems, tents</p>
                </div>
            </div>

            <h2 style={{textAlign: 'center',marginBottom : '2rem'}}>Featured Products</h2>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">📷</div>
                    <div className="product-info">
                        <div className="product-title">Canon DSLR Camera</div>
                        <div className="product-price">₹500/day</div>
                        <div className="product-location">📍 Mumbai, Maharashtra</div>
                        <button className="btn btn-primary" style={{width: '100%'}} >View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">💻</div>
                    <div className="product-info">
                        <div className="product-title">MacBook Pro</div>
                        <div className="product-price">₹800/day</div>
                        <div className="product-location">📍 Delhi, India</div>
                        <button className="btn btn-primary" style={{width: '100%'}} >View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">🚗</div>
                    <div className="product-info">
                        <div className="product-title">Honda City</div>
                        <div className="product-price">₹1200/day</div>
                        <div className="product-location">📍 Bangalore, Karnataka</div>
                        <button className="btn btn-primary" style={{width: '100%'}} >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Home
