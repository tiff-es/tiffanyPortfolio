import React from "react";
import NavBar from "../components/NavBar";
import { Alert, Card, Container, Jumbotron } from "react-bootstrap";

export default class AboutPage extends React.Component{


    render() {
        return(
            <div id='about main-container'>
                {/*Fluid jumbotron
                This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.*/}
                <Jumbotron fluid>
                    <Container>
                        <h2>About Me</h2>
                        <p>
                           <b>Insert a synopsis of myself & my journey AKA  30 second elevator pitch (Flatiron, passion for code, etc.) and my coding languages (tech stack),</b>
                        </p>
                    </Container>
                </Jumbotron>

            </div>

        )}
}