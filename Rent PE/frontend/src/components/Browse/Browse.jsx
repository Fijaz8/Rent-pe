import React from 'react'
import './Browse.css'
function Browse() {
  return (
    
      <div id="browse" className="page">
        <div className="container">
            <h1>Browse Products</h1>
            
            <div className="filters">
                <div className="filter-row">
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control">
                            <option>All Categories</option>
                            <option>Electronics</option>
                            <option>Vehicles</option>
                            <option>Tools</option>
                            <option>Events</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Enter city"/>
                    </div>
                    <div className="form-group">
                        <label>Price Range</label>
                        <select className="form-control">
                            <option>Any Price</option>
                            <option>Under ₹500</option>
                            <option>₹500 - ₹1000</option>
                            <option>₹1000 - ₹2000</option>
                            <option>Above ₹2000</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" style={{width: '100%'}}>Apply Filters</button>
                    </div>
                </div>
            </div>

            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">📷</div>
                    <div className="product-info">
                        <div className="product-title">Canon DSLR Camera</div>
                        <div className="product-price">₹500/day</div>
                        <div className="product-location">📍 Mumbai, Maharashtra</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">💻</div>
                    <div className="product-info">
                        <div className="product-title">MacBook Pro</div>
                        <div className="product-price">₹800/day</div>
                        <div className="product-location">📍 Delhi, India</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">🎮</div>
                    <div className="product-info">
                        <div className="product-title">PlayStation 5</div>
                        <div className="product-price">₹400/day</div>
                        <div className="product-location">📍 Chennai, Tamil Nadu</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">🚗</div>
                    <div className="product-info">
                        <div className="product-title">Honda City</div>
                        <div className="product-price">₹1200/day</div>
                        <div className="product-location">📍 Bangalore, Karnataka</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">🔧</div>
                    <div className="product-info">
                        <div className="product-title">Power Drill Set</div>
                        <div className="product-price">₹200/day</div>
                        <div className="product-location">📍 Pune, Maharashtra</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">🎪</div>
                    <div className="product-info">
                        <div className="product-title">Party Tent</div>
                        <div className="product-price">₹1500/day</div>
                        <div className="product-location">📍 Hyderabad, Telangana</div>
                        <button className="btn btn-primary" style={{width: '100%'}} onclick="showPage('product-detail')">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Browse
