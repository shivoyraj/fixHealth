import React from 'react';
import docImage from '../media/doc.jpg';

const HeroImage: React.FC = () => {
  const logoUrl = 'https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg';

  return (
    <div className="hero-container" style={{
      backgroundImage: `url(${docImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      float: 'left',
      position: 'relative',
    }}>
      <div className="logo-container" style={{
        position: 'absolute',
        top: '20px',
        left: '200px',
        width: '130px',
      }}>
        <img src={logoUrl} alt="Logo" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default HeroImage;
