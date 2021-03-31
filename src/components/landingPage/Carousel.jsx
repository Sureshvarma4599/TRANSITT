// src/components/bootstrap-carousel.component.js
import React from "react";
import './landingPage.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../add4.jpg'
import Logo1  from '../../add3.jpg'
import Logo2 from '../../add5.jpg'

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
               
                            <Carousel>

                                <Carousel.Item interval={1000}>
                                    <img 
                                        className="d-block w-100"
                                        src={Logo}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                     <h4>Maintain your Records</h4>
                                       
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item interval={1000}>
                                    <img 
                                        className="d-block w-100"
                                        src={Logo1}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                  <h4>Easy to Maintain</h4>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item interval={1000}>
                                    <img 
                                        className="d-block w-100"
                                        src={Logo2}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                  <h4>Transport Management services</h4>
                                       
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                       
            </div>
        )
    };
}

export default BootstrapCarouselComponent;