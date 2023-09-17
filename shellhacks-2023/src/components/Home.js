import React from 'react';
import Topbar from './Topbar';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ParentMap from './ParentMap';

export default function Home() {
  let navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div>
      <Topbar />
      <ParentMap />
      <div className="title">Get Started With</div>
      <div className='buttons'>
        <button className='button'>My Planned Routes</button>
        <button className='button'>Upload PDF</button>
        <button className='button'>Link to ROS</button>
        <button onClick={() => handleRedirect("navigation")} className='button'>
          Add Manually
        </button>
      </div>
    </div>
  );
}
