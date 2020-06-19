import { Container } from "react-bootstrap";
import React from "react";

 const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)

export default Layout