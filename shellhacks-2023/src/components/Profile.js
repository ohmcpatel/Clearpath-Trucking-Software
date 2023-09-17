import React from 'react';
import './Profile.css'; // Import your CSS file
import Topbar from './Topbar';

export default function Profile() {
  // Sample data for the trucking company profile
  const truckingCompanyProfile = {
    companyName: 'TruckTech Logistics',
    industry: 'Trucking and Transportation',
    foundedYear: 1995,
    location: 'Dallas, TX',
    website: 'https://www.trucktechlogistics.com',
    about:
      'TruckTech Logistics is a trusted partner in the trucking and transportation industry...',
  };

  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Carter',
      position: 'CEO',
      email: 'alice.carter@trucktechlogistics.com',
      linkedin: 'https://www.linkedin.com/in/alicecarter',
    },
    {
      id: 2,
      name: 'Bob Davis',
      position: 'CTO',
      email: 'bob.davis@trucktechlogistics.com',
      linkedin: 'https://www.linkedin.com/in/bobdavis',
    },
    // Add more team members
  ];

  // Sample technical skills
  const technicalSkills = [
    'Fleet Management',
    'Route Optimization',
    'GPS Tracking',
    'Real-time Data Analysis',
    'Supply Chain Integration',
    // Add more technical skills
  ];

  return (
    <>
        <Topbar/>
        <div className="profile-container">
      <div className="profile-header">
        <h1>{truckingCompanyProfile.companyName}</h1>
        <p>{truckingCompanyProfile.industry}</p>
        <p>Founded in {truckingCompanyProfile.foundedYear}</p>
        <p>{truckingCompanyProfile.location}</p>
        <p>
          <a href={truckingCompanyProfile.website} target="_blank" rel="noopener noreferrer">
            {truckingCompanyProfile.website}
          </a>
        </p>
      </div>

      <div className="profile-about">
        <h2>About Us</h2>
        <p>{truckingCompanyProfile.about}</p>
      </div>

      <div className="profile-team">
        <h2>Our Team</h2>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.id}>
              <strong>{member.name}</strong>
              <p>{member.position}</p>
              <p>Email: {member.email}</p>
              <p>
                LinkedIn:{' '}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  {member.name}'s LinkedIn Profile
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-skills">
        <h2>Technical Skills</h2>
        <ul>
          {technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    </>

  );
}
