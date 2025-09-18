import React from 'react'
import NavFooter from '../components/NavFooter'
import { NavBar } from '../components/NavBar'
import Chart from './Chart'
import WhyEarn from '../components/WhyEarn'

export const Live = () => {
  return (
    <>
    <NavBar/>
    <div style={{ marginTop: "80px", marginBottom: "90px" }} >
     <Chart/>
     <Chart/>
     <WhyEarn/>
    </div>
     
    <NavFooter/>
    </>
  )
}
