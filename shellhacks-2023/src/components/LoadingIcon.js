import React from 'react';
import "./LoadingIcon.css"

const LoadingIcon = () => {
  return (
    <div className='loading'>
    <div className='circle'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 250"
            preserveAspectRatio="xMidYMid"
            className="loading-icon"
            >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#007bff"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
            >
                <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            </svg>
        </div>
    </div>
   
    
  );
};

export default LoadingIcon;
