import React, { useEffect, useState } from 'react';
import Topbar from './Topbar';
import { useNavigate, useParams } from 'react-router';
import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript, Marker } from '@react-google-maps/api';
import './View.css';
import roadkill from '../data/range_point_groups.json';

export default function View() {
  const roadkillRegions = roadkill;
  const { pointA, pointB } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const latLngA = JSON.parse(decodeURIComponent(pointA));
  const latLngB = JSON.parse(decodeURIComponent(pointB));
  const { lat: latA, lng: lngA } = latLngA;
  const { lat: latB, lng: lngB } = latLngB;
  const navigate = useNavigate();

  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const request = {
      origin: { lat: latA, lng: lngA },
      destination: { lat: latB, lng: lngB },
      travelMode: 'DRIVING',
    };

    let directionsService = null; 
    if (window && window.google && window.google.maps) {
        directionsService = new window.google.maps.DirectionsService();
    } else {
        window.location.reload();

    }

    if (directionsService) {
        directionsService.route(request, (result, status) => {
            if (status === 'OK') {
              setDirections(result);
            } else {
              console.error('Directions request failed:', status);
            }
          });
    }
    
  }, [latA, lngA, latB, lngB]);

  const handleRedirect = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div>
      <Topbar />
      <div>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerClassName="maps" id="directions-map" zoom={15} center={{ lat: latA, lng: lngA }}>
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    strokeColor: 'blue',
                  },
                }}
              />
            )}

            {isChecked &&
              roadkillRegions.map((region, index) => {
                const shouldRenderMarker = directions?.routes[0]?.overview_path.some((coordinate) => {
                  return (
                    coordinate.lat() >= region.bottom_left.latitude &&
                    coordinate.lat() <= region.top_right.latitude &&
                    coordinate.lng() >= region.bottom_left.longitude &&
                    coordinate.lng() <= region.top_right.longitude
                  );
                });

                return shouldRenderMarker ? (
                  <Marker
                    key={index}
                    position={{
                      lat: (region.bottom_left.latitude + region.top_right.latitude) / 2,
                      lng: (region.bottom_left.longitude + region.top_right.longitude) / 2,
                    }}
                  />
                ) : null;
              })}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className='hazard'>
        <div className="warning-box">
         <h3 className='warning-text'>Hazard Zone Warnings: </h3>
        </div>
        <div className='checkbox'>
            <div className={`toggle-switch ${isChecked ? 'on' : 'off'}`} onClick={() => setIsChecked(!isChecked)}>
                <div className="slider"></div>
            </div>
        </div>

      </div>

      <div className="edit-buttons">
        <button onClick={() => handleRedirect('navigation')} className="edit-button">
          Edit Route
        </button>
        <button onClick={() => handleRedirect('home')} className="edit-button">
          End Route
        </button>
      </div>

    </div>
  );
}
