import React from 'react'
import './Booking.css'
const Booking = () => {
  return (
    <div>
      <div id="booking" className="page">
  <div className="container">
    <h1>Book: Canon DSLR Camera</h1>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
      <div>
        <div className="calendar">
          <div className="calendar-header">
            <button className="btn btn-secondary">← Prev</button>
            <h3>December 2024</h3>
            <button className="btn btn-secondary">Next →</button>
          </div>

          <div className="calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div className="calendar-day" style={{ fontWeight: 'bold' }} key={day}>
                {day}
              </div>
            ))}

            <div className="calendar-day">1</div>
            <div className="calendar-day">2</div>
            <div className="calendar-day booked">3</div>
            <div className="calendar-day available">4</div>
            <div className="calendar-day available">5</div>
            <div className="calendar-day available">6</div>
            <div className="calendar-day available">7</div>
            <div className="calendar-day available">8</div>
            <div className="calendar-day available">9</div>
            <div className="calendar-day available">10</div>
            <div className="calendar-day available">11</div>
            <div className="calendar-day available">12</div>
            <div className="calendar-day selected">13</div>
            <div className="calendar-day selected">14</div>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <h3>Booking Summary</h3>

          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Start Date:</span>
              <span>Dec 13, 2024</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>End Date:</span>
              <span>Dec 14, 2024</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Duration:</span>
              <span>2 days</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Price per day:</span>
              <span>₹500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Booking
