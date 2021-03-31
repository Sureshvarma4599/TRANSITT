import React, { Component } from 'react'
import './landingPage.css'
import BootstrapCarouselComponent from './Carousel'
import { Card } from 'react-bootstrap';
import Logo from '../../add1.jpg'
import Logo1 from '../../add3.jpg'
import Logo2 from '../../add1.jpg'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

export default function landingPage() {
  return (
    <div>
    <h1>Our Services</h1>
    <div className="cards">
      <div className="card1">
        <div>
       <h3>Trip <br/> Records</h3>
       </div>
      </div>
      <div  className="card2">
        <div>
        <h3>Driver <br/> Details</h3>
        </div>
      </div>
      <div  className="card3">
        <div>
        <h3>Vehicles <br/> Info</h3>
        </div>
      </div>
      <div className="card4">
        <div>
        <h3>Billings <br/> & <br/> invoices</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

