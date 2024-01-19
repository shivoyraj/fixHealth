import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import HeroImage from './components/HeroImage';
import BookingForm from './components/BookingForm';

import './App.css';
import Doctor from './components/Doctors';


const LandingPage: React.FC = () => {
  const [flag, setFlag] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  useEffect(() => {
    if (flag) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
    }
  }, [flag]);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.get(`https://www.fixhealth.com/_next/data/w2XjD6OUDZiPReN6EapB0/clinical-team.json`);
      setAvailableDoctors(response.data['pageProps'].data.physiotherapistCarouselData);
      setFlag(true);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
    console.log('Form submitted:', bookingFormData);
  };

  return (
    <div>
      <HeroImage />

      <div className="container">
        <BookingForm
          data={bookingFormData}
          onDataChange={(data) => setBookingFormData(data)}
          onSubmit={handleFormSubmit}
        />
        <br></br>
        <div>
          {flag && (
            <div className="doctor-container">
              {availableDoctors.map((doctor) => (
                <Doctor
                  key={doctor.slug}
                  imageSrc={doctor.image.url}
                  name={doctor.name}
                  qualification={doctor.qualification.map((q) => `${q.title}, ${q.info}`).join('\n')}
                  yearsOfExperience={parseInt(doctor.yearsOfExperience, 10)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
