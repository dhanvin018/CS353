import React, { useState } from 'react';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const [selectedSlots, setSelectedSlots] = useState({});

  const handleSlotSelection = (date, slot) => {
    setSelectedSlots((prevSelectedSlots) => {
      const updatedSelectedSlots = { ...prevSelectedSlots };

      // If the slot is already selected, unselect it
      if (updatedSelectedSlots[date] === slot) {
        delete updatedSelectedSlots[date];
      } else {
        // Deselect the previous selection on a different day
        for (const selectedDate in updatedSelectedSlots) {
          if (selectedDate !== date) {
            delete updatedSelectedSlots[selectedDate];
          }
        }

        // Select the new slot
        updatedSelectedSlots[date] = slot;
      }

      return updatedSelectedSlots;
    });
  };

  const handleConfirmBooking = () => {
    // Access selected time slots for each date using selectedSlots state
    console.log('Selected Slots:', selectedSlots);
    // Add your booking confirmation logic here
  };

  const renderTimeSlots = (date) => {
    const timeSlots = [];
    for (let hour = 10; hour <= 18; hour++) {
      const slot = `${hour}:00 - ${hour + 1}:00`;
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
    return timeSlots;
  };

  const renderDateRows = () => {
    const dateRows = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      dateRows.push(
        <div key={formattedDate} className="date-row">
          <div className="date-column">{formattedDate}</div>
          <div className="time-slots">{renderTimeSlots(formattedDate)}</div>
        </div>
      );
    }
    return dateRows;
  };

  return (
    <div className="doctor-profile">
      <div className="doctor-details card">
        <div className="card-body">
          <h2 className="card-title">Dr. John Doe</h2>
          <div className="row">
            <div className="col-md-6">
              <p>Contact: +123456789</p>
              <p>Email: drjohndoe@example.com</p>
              <p>Address: Clinic Address, City</p>
            </div>
            <div className="col-md-6">
              <p>Qualifications: MBBS, MD</p>
              <p>Registration Number: ABC12345</p>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-booking card">
        <div className="card-body">
          <h3 className="card-title">Book an Appointment</h3>
          {renderDateRows()}
          <button className="confirm-booking" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </div>
      </div>
      <div className="user-reviews">
        <h3 className="section-title">User Reviews</h3>
        <div className="review">
          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="review-date">Feb 14, 2024</p>
          </div>
          <p className="review-text">Great doctor! Highly recommend.</p>
        </div>
        <hr />
        <div className="review">
          <div className="user-info">
            <p className="user-name">Jane Smith</p>
            <p className="review-date">Feb 15, 2024</p>
          </div>
          <p className="review-text">Very knowledgeable and friendly staff.</p>
        </div>
        <hr />
        {/* Add more reviews with the new structure */}
      </div>
    </div>
  );
};

export default DoctorProfile;
