import React from 'react';
import { Linkedin } from 'lucide-react';
import './contact.css';
import Shambhavi from '../images/shambhavi.jpg';
import Arjun from '../images/Arjun.jpg';
import Akshaya from '../images/akshaya.jpg';
import Tejas from '../images/tejas.jpg';
import Sanath from '../images/sanath.jpg';
import Prabhanjan from '../images/prabhanjan.jpg';

const ProfileCard = ({ name, profession, image, isWhiteBackground, linkedinUrl }) => {
  const handleLinkedInClick = (e) => {
    e.preventDefault();
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };
  const imageSrc = image && image.src ? image.src : image;
  return (
    <div className={`profile-card ${isWhiteBackground ? 'white-bg' : ''}`}>
      <img src={imageSrc} alt={name} className="profile-image" />      
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-profession">{profession}</p>
      </div>
      <div className="profile-icons">
        <a href={linkedinUrl} onClick={handleLinkedInClick} className="linkedin-link">
          <Linkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  const profiles = [
    {
      name: 'Shambhavi A S',
      profession: 'Aerospace Engineer',
      image: {
        src: Shambhavi,
      },
      isWhiteBackground: false,
      linkedinUrl: 'https://www.linkedin.com/in/a-s-shambhavi-a31532206'
    },
    {
      name: 'Arjun Suresh',
      profession: 'Software Engineer',
      image: {
        src: Arjun,
      },
      isWhiteBackground: true,
      linkedinUrl: 'https://www.linkedin.com/in/arjun-suresh108/'
    },
    {
      name: 'Tejas Naresh Reddy',
      profession: 'Aerospace Engineer',
      image: {
        src: Tejas,
      },
      isWhiteBackground: false,
      linkedinUrl: 'https://www.linkedin.com/in/tejas-naresh-reddy-80b39b1b1/'
    },
    {
      name: 'Sanath Kumar Naik ',
      profession: 'Aerospace Engineer',
      image: {
        src: Sanath,
      },
      isWhiteBackground: false,
      linkedinUrl: 'https://www.linkedin.com/in/sanath-kumar-naik-l-3788b7200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Akshaya BS',
      profession: 'AI Enthusiast',
      image: {
        src: Akshaya,
      },
      isWhiteBackground: false,
      linkedinUrl: 'https://www.linkedin.com/in/akshaya-bs-998879222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Prabhanjan Manjunath',
      profession: 'Aerospace Engineer',
      image: {
        src: Prabhanjan,
      },
      isWhiteBackground: false,
      linkedinUrl: 'http://linkedin.com/in/prabhanjan-m-b801a8144'
    }
  ];

  return (
    <>
    <h1 style={{fontWeight: 300,fontSize: '4rem',textAlign: 'center',marginBottom: '1rem'}}>Meet Our Team</h1>
    <div className="profile-grid">
    
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
    </>
  );
};

export default ProfileGrid;