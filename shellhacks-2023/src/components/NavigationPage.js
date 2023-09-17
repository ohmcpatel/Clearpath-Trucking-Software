import React from 'react'
import EnterInformation from "./EnterInformation" ;
import Topbar from './Topbar';
import ParentMap from './ParentMap';
import "./NavigationPage.css"




export default function NavigationPage() {
  return (
    <>
        <Topbar/>
        <ParentMap/>
        <EnterInformation/>
    </>
  )
}
