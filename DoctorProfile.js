import React from "react";
import "../index.css"; // Import your CSS file for styling

function DoctorProfile() {
  
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Logo" height="40" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Find a Doctor</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <div class="book-appointment">Book Appointment</div>
      </nav>
      <h2 className="doc-prof-heading">Doctor's Profile</h2>
      <div className="doctor-profile-container">
        <div className="doctor-image-container">
          <img
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=900&t=st=1707319918~exp=1707320518~hmac=046a1aaeee342290d0389f04c51b706fcafc7d8caf1c92d1bee9692247c602df"
            alt="Doctor"
            className="doctor-image"
          />
        </div>
        <div className="doctor-details">
          <h2>Dr. John Doe</h2>
          <p>Qualifications: MBBS, MD</p>
          <p>Specialization: Cardiology</p>
          <p>Location: New York, USA</p>
          <div className="ratings">
            <p>User Ratings: 4.5</p>
            <p>Comments:</p>
            <ul>
              <li>Great doctor, highly recommended!</li>
              <li>Very knowledgeable and friendly.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DoctorProfile;
