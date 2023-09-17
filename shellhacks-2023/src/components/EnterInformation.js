import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './EnterInformation.css';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';

function EnterInformation() {
  const navigate = useNavigate();
  const [locationA, setLocationA] = useState('');
  const [locationB, setLocationB] = useState('');
  const [latLngA, setLatLngA] = useState(null);
  const [latLngB, setLatLngB] = useState(null);

  // State for managing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (place, inputType) => {
    if (inputType === 'pointA') {
      setLocationA(place.label);
    } else if (inputType === 'pointB') {
      setLocationB(place.label);
    }
  };

  const handleRedirect = async (url) => {
    if (!locationA || !locationB) {
      // Show the modal if either location is empty
      setIsModalOpen(true);
      return;
    }

    const aCoord = await LocationToLatLng('pointA', locationA);
    const bCoord = await LocationToLatLng('pointB', locationB);
    navigate(`/${url}/${JSON.stringify(aCoord)}/${JSON.stringify(bCoord)}`);
  };

  const LocationToLatLng = async (inputType, location) => {
    const apiKey = process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY;
    const encodedLocation = encodeURIComponent(location);
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${apiKey}`;

    const response = await fetch(geocodingUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const result = data.results[0];
      const { lat, lng } = result.geometry.location;
      return { lat, lng };
    }
  };

  return (
    <div className='points'>
      <div className='point'>
        <h2 className='input-title'>Enter Starting Point:</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY}
          selectProps={{
            onChange: (place) => handleSelect(place, 'pointA'),
          }}
        />
      </div>
      <div className='point'>
        <h2 className='input-title'>Enter Destination:</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY}
          selectProps={{
            onChange: (place) => handleSelect(place, 'pointB'),
          }}
        />
      </div>
      <button onClick={() => handleRedirect('view')} className='edit-button-nav'>
        Show Route
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel='Fill Out Locations Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <h2>Please fill out both the start and end locations</h2>
        <button className="close-button-nav" onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default EnterInformation;
