import React, { useState } from 'react';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const [selectedSlots, setSelectedSlots] = useState({});
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const handleSlotSelection = (date, slot) => {
    setSelectedSlots((prevSelectedSlots) => {
      const updatedSelectedSlots = { ...prevSelectedSlots };

      if (updatedSelectedSlots[date] === slot) {
        delete updatedSelectedSlots[date];
      } else {
        for (const selectedDate in updatedSelectedSlots) {
          if (selectedDate !== date) {
            delete updatedSelectedSlots[selectedDate];
          }
        }

        updatedSelectedSlots[date] = slot;
      }

      return updatedSelectedSlots;
    });
  };

  
const handleDateNavigation = (direction) => {
  // const currentDate = new Date();
  // const nextDate = new Date(currentDate);
  // nextDate.setDate(nextDate.getDate() + direction);

  setSelectedSlots({}); // Clear selected slots when navigating to a new date
  if (direction === -1) {
  setCurrentDateIndex((prevIndex) => (prevIndex + direction < 0 ? 0 : prevIndex + direction));
}

  else {
    setCurrentDateIndex((prevIndex) => prevIndex + direction);
  }
  
  
};



  const handleConfirmBooking = () => {
    if (Object.keys(selectedSlots).length > 0) {
      console.log('Selected Slots:', selectedSlots);
      // Add your booking confirmation logic here
    } else {
      console.log('Please select a time slot before confirming the booking.');
      // Add logic to handle no selected slots
    }
  };

  const renderTimeSlots = (date) => {
  const timeSlots = [];
  const sessions = [
    { start: 10, end: 12, label: 'Morning session' },
    { start: 14, end: 17, label: 'Afternoon session' },
    { start: 18, end: 20, label: 'Evening session' },
  ];

  sessions.forEach((session) => {
    timeSlots.push(<div key={`session-divider-${session.label}`} className="session-divider">{session.label}</div>);

    for (let hour = session.start; hour <= session.end; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const slot = `${hour}:${minute === 0 ? '00' : minute} - ${hour + (minute === 30 ? 1 : 0)}:${minute === 0 ? '30' : '00'}`;
        const isSelected = selectedSlots[date] === slot;
        timeSlots.push(
          <button
            key={slot}
            className={`time-slot ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSlotSelection(date, slot)}
            disabled={isSelected}
          >
            {slot}
          </button>
        );
      }
    }
  });

  return timeSlots;
};

  const renderDateRow = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + currentDateIndex);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div key={formattedDate} className="date-row">
      <div className="date-navigation">
        <button onClick={() => handleDateNavigation(-1)} className="nav-button">
          {'<'}
        </button>
        <div className="current-date">{formattedDate}</div>
        <button onClick={() => handleDateNavigation(1)} className="nav-button">
          {'>'}
        </button>
      </div>
      <div className="time-slots">{renderTimeSlots(formattedDate)}</div>
    </div>
  );
};

  return (
    <div className="doctor-profile">
      <div className="left-half">
      <div className="doctor-details card">
        <div className="card-body">
          <div className="details-columns">
            <div className="doctor-image-column">
              <img src="src=client\src\doctorImage.webp" alt="Doctor" className="doctor-image" />
            </div>
            <div className="details-column">
              <h2 className="card-title doctor-name">Dr. John Doe</h2>
              <div className="details-columns">
                <div className="details-column">
                  <p>+123456789</p>
                  <p>drjohndoe@example.com</p>
                  <p>Clinic Address, City</p>
                </div>
                <div className="details-column">
                  <p>MBBS, MD</p>
                  <p>ABC12345</p>
                </div>
              </div>
              <div className="doctor-description">
              <p>
                Dedicated and compassionate medical professional with expertise in [specialization].
                Committed to providing exceptional patient care and promoting well-being.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>





      <div className="user-reviews card">
        <h3 className="card-title" id='userTitle'>User Reviews</h3>
        <div className='parentReview'>
          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">John Doe</span>
              <span className="review-date">January 15, 2023</span>
            </p>
            <p className="review-content">Excellent service! Dr. John Doe is very knowledgeable and caring.</p>
          </div>
          <hr />
          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">Jane Smith</span>
              <span className="review-date">February 5, 2023</span>
            </p>
            <p className="review-content">I highly recommend Dr. Doe. The clinic staff is friendly and efficient.</p>
          </div>
          <hr />
          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">Mark Johnson</span>
              <span className="review-date">March 20, 2023</span>
            </p>
            <p className="review-content">Had a great experience. Dr. Doe patiently answered all my queries.</p>
          </div>
          <hr />

          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">John Doe</span>
              <span className="review-date">January 15, 2023</span>
            </p>
            <p className="review-content">Excellent service! Dr. John Doe is very knowledgeable and caring.</p>
          </div>
          <hr />
          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">Jane Smith</span>
              <span className="review-date">February 5, 2023</span>
            </p>
            <p className="review-content">I highly recommend Dr. Doe. The clinic staff is friendly and efficient.</p>
          </div>
          <hr />
          <div className="review">
            <p className="review-info">
              <span className="reviewer-name">Mark Johnson</span>
              <span className="review-date">March 20, 2023</span>
            </p>
            <p className="review-content">Had a great experience. Dr. Doe patiently answered all my queries.</p>
          </div>
          <hr />
        </div>
        
        {/* Add more reviews with the new structure */}
      </div>


      </div>

    
      <div className="right-half">
        <div className="appointment-booking card">
          <div className="card-body">
            <h3 className="card-title">Book an Appointment</h3>
            {renderDateRow()}
            <button className="confirm-booking" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
