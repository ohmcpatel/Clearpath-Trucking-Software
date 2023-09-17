import React, { useState, useEffect } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import "./ParentMap.css"
import LoadingIcon from "./LoadingIcon"

function Map({ currentLocation }) {
  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={currentLocation}
      zoom={15} // You can adjust the zoom level as needed
    >
      {/* Your map contents, such as markers and other components */}
    </GoogleMap>
  );
}

const ParentMap = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 30, lng: 34 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          setLoading(false);
        },
        (error) => {
          console.error('Error getting user location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded || loading) return <LoadingIcon/>;

  return (
    <div>
      <Map currentLocation={currentLocation} />
    </div>
  );
};

export default ParentMap;
