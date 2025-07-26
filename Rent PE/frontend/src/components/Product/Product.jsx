import React from 'react'

const Product = () => {
  return (
    
      <div id="product-detail" className="page">
        <div className="container">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr',gap: '3rem',marginBottom: '2rem'}}>
                <div>
                    <div className="product-image" style={{height: '400px', borderRadius: '12px', fontSize: '4rem'}}>📷</div>
                </div>
                <div>
                    <h1>Canon DSLR Camera</h1>
                    <div className="product-price" style={{fontSize: '2rem', margin: '1rem 0'}}>₹500/day</div>
                    <div className="product-location" style={{fontSsize: '1.1rem',marginBottom: '2rem'}}>📍 Mumbai, Maharashtra</div>
                    
                    <div style={{background: 'white' , padding: '1.5rem' ,borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                        <h3>Description</h3>
                        <p>Professional Canon DSLR camera perfect for photography enthusiasts. Includes multiple lenses and accessories. Great for events, portraits, and landscape photography.</p>
                        
                        <h3 style={{marginTop: '1.5rem'}}>Features</h3>
                        <ul style={{marginLeft: '1.5rem'}}>
                            <li>24.2 MP APS-C CMOS sensor</li>
                            <li>Multiple lenses included</li>
                            <li>4K video recording</li>
                            <li>Professional grade equipment</li>
                        </ul>
                        
                        <div style={{marginTop: '2rem'}}>
                            <button className="btn btn-primary" style={{width: '100%', padding: '1rem'}} >Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{background: 'white',padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <h3>Owner Information</h3>
                <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '1rem'
}}>
  <div style={{
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem'
  }}>
    👤
  </div>


                    <div>
                        <div style={{fontWeight: 'bold'}}>Raj Kumar</div>
                        <div style={{color: '#6b7280'}}>⭐ 4.8/5 (24 reviews)</div>
                        <div style={{color: '#6b7280'}}>Member since 2023</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Product
