// Doctor.tsx

import React from 'react';

interface DoctorProps {
  imageSrc: string;
  name: string;
  qualification: string;
  yearsOfExperience: number;
}

const Doctor: React.FC<DoctorProps> = ({ imageSrc, name, qualification, yearsOfExperience }) => {
  return (
    <div className='doctor-card'>
      <div className='doctor-image-container'>
        <img src={imageSrc} alt={name} className='doctor-image' />
      </div>
      <div className='doctor-details'>
        <h5>{name}</h5>
        <p>{qualification}</p>
        <p>Years of Experience: {yearsOfExperience}</p>
      </div>
      <button className = 'consultButton' type="submit">Consult Now</button>
    </div>
  );
};

export default Doctor;
