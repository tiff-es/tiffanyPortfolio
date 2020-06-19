import React from "react";
import NavBar from "../components/NavBar";
import { Alert, Button, Carousel, Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class HomePage extends React.Component{


    render() {
        return(
            <div id='home main-container'>

                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>


                {/*<Carousel className='carousel'>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="holder.js/800x400?text=First slide&bg=373940"*/}
                {/*            alt="First slide"*/}
                {/*        />*/}
                {/*        <Carousel.Caption>*/}
                {/*            <h3>First slide label</h3>*/}
                {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="holder.js/800x400?text=Second slide&bg=282c34"*/}
                {/*            alt="Third slide"*/}
                {/*        />*/}

                {/*        <Carousel.Caption>*/}
                {/*            <h3>Second slide label</h3>*/}
                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="holder.js/800x400?text=Third slide&bg=20232a"*/}
                {/*            alt="Third slide"*/}
                {/*        />*/}

                {/*        <Carousel.Caption>*/}
                {/*            <h3>Third slide label</h3>*/}
                {/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*</Carousel>*/}

            </div>

    )}
}
//




