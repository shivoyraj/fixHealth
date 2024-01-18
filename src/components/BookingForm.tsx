import React, { useState } from 'react';

interface BookingFormProps {
  data: any;
  onDataChange: (data: any) => void;
  onSubmit: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ data, onDataChange, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  return (
    <div className="booking-form-container">
            <h2>Book an Appointment</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={data.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone number:</label>
          <input type="tel" name="phone" value={data.phone} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Age:</label>
          <input type="number" name="age" value={data.age} onChange={handleInputChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={data.city} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" name="company" value={data.company} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Chief complaints:</label>
          <textarea style={{ maxHeight: '40px' }} name="chiefComplaints" value={data.chiefComplaints} onChange={handleInputChange} required />
        </div>

        {data.age >= 40 && (
          <div>
            <label>Previous experience with physiotherapy:</label>
            <textarea
              style={{ maxHeight: '40px' }}
              name="previousExperience"
              value={data.previousExperience}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <button className = 'submitButton' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
