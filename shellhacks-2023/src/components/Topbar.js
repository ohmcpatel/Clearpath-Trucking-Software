import React from 'react'
import logo from "../images/logo.svg"
import profile from "../images/profile.png"
import "./Topbar.css"
import { useNavigate } from 'react-router'

export default function Topbar() {
    let navigate = useNavigate()

    const handleRedirect = (url) => {
        navigate(`/${url}`)
    }
  return (
    <div className='bar'>
        <img onClick={() => handleRedirect("home")} className="logo" src={logo} />
        <img onClick={() => handleRedirect("profile")} className="profile" src={profile} />
    </div>
  )
}
