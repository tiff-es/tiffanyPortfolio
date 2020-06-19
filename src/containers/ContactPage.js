import React from "react";
import NavBar from "../components/NavBar";
import { Alert, Card, Container, Jumbotron } from "react-bootstrap";

export default class ContactPage extends React.Component{


    render() {
        return(
            <div id='home main-container'>
                {/*Fluid jumbotron
                This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.*/}
                <Jumbotron fluid>
                    <Container>
                        <h2>Contact Me</h2>
                        <p>
                           <b> Insert contact info, socials (linkedin, medium), include contact form on this page</b>
                        </p>
                    </Container>
                </Jumbotron>

            </div>

        )}
}