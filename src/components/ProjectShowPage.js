import React from "react";
import Card from "react-bootstrap/Card";
import { Carousel, Container, Image } from "react-bootstrap";
const ProjectShowPage = ({id, title, images, desc, details })=>  {
//    The parent of this
//    This will be the project show page consisting of detailed breakdown of my projects, bullet points similar to
//    resume, images, and demos
    return (
        <Container id={`project-${id}-show-page`}>
            <Card.Title>{title}</Card.Title>
            <Card.Body>
                <h3>{desc}</h3>
                <ul>{images.map(img => <li> <Image  src={img.src}/></li>)}</ul>
                {/*    Insert carousel of images from project*/}
                {/*<ul>{details}</ul>
                 list of details fetched from API/parent*/}

            </Card.Body>


        </Container>
    )

}

export default ProjectShowPage