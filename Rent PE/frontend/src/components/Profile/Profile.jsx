import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
   
          <div id="profile" className="page active">
        <div className="container">
            <div className="profile-header">
                <div className="profile-avatar">
                    👤
                    <button className="edit-avatar">✏️</button>
                </div>
                <h2>John Doe</h2>
                <p style={{color: '#6b7280'}}>Member since January 2023</p>
                <p style={{color: '#6b7280'}}>📍 Mumbai, Maharashtra</p>
                <div style={{marginTop: '1rem'}}>
                    <span style={{color: '#fbbf24;'}}>⭐⭐⭐⭐⭐</span>
                    <span style={{marginLeft: '0.5rem'}}>4.8/5 (45 reviews)</span>
                </div>
            </div>

            <div className="profile-stats">
                <div className="stat-item">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Products Listed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">45</div>
                    <div className="stat-label">Items Rented</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">₹25,000</div>
                    <div className="stat-label">Total Earnings</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">4.8</div>
                    <div className="stat-label">Rating</div>
                </div>
            </div>

            <div className="tabs">
                <button className="tab active" onclick="showTab('my-products')">My Products</button>
                <button className="tab" onclick="showTab('my-rentals')">My Rentals</button>
                <button className="tab" onclick="showTab('settings')">Settings</button>
            </div>

           
            <div id="my-products" className="tab-content active">
                <div style={{display: 'flex', justifyContent: 'between',alignItems: 'center', marginBottom: '2rem'}}>
                    <h3>My Listed Products</h3>
                    <button className="btn btn-primary" onclick="showPage('add-product')">+ Add New Product</button>
                </div>
                
                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-image">📷</div>
                        <div className="product-info">
                            <div className="product-title">Canon DSLR Camera</div>
                            <div className="product-price">₹500/day</div>
                            <div className="product-location">📍 Mumbai, Maharashtra</div>
                            <div className="product-actions">
                                <button className="btn btn-secondary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-warning">Pause</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="product-card">
                        <div className="product-image">💻</div>
                        <div className="product-info">
                            <div className="product-title">MacBook Pro</div>
                            <div className="product-price">₹800/day</div>
                            <div className="product-location">📍 Mumbai, Maharashtra</div>
                            <div className="product-actions">
                                <button className="btn btn-secondary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-warning">Pause</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="my-rentals" className="tab-content">
                <h3>My Rental History</h3>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Owner</th>
                                <th>Duration</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>iPhone 14 Pro</td>
                                <td>Sarah Johnson</td>
                                <td>3 days</td>
                                <td>₹1,500</td>
                                <td><span className="status-badge status-active">Completed</span></td>
                                <td><button className="btn btn-secondary">Review</button></td>
                            </tr>
                            <tr>
                                <td>Honda City</td>
                                <td>Raj Kumar</td>
                                <td>2 days</td>
                                <td>₹2,400</td>
                                <td><span className="status-badge status-pending">Ongoing</span></td>
                                <td><button className="btn btn-secondary">Contact</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Profile
