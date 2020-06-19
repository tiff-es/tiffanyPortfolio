import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

 const NavBar = () => (
     <Navbar bg="light" expand="lg">
         <Navbar.Brand href="#home">Tiffany Abraham</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
                 <Link className='nav-link'to="/">Home</Link>
                 <Link className='nav-link'to="/about">About Me</Link>
                 <Link className='nav-link'to="/contact">Contact Me</Link>

                 <NavDropdown title="Projects" id="basic-nav-dropdown">
                     <Link className='dropdown-item'to='/project1'>Project 1</Link>
                     <Link className='dropdown-item'to='/project2'>Project 2</Link>
                     <Link className='dropdown-item'to='/project3'>Project 3</Link>
                     <Link className='dropdown-item'to='/project4'>Project 4</Link>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#putgithubhere">My Github</NavDropdown.Item>
                 </NavDropdown>
             </Nav>
         </Navbar.Collapse>
     </Navbar>
)

export default NavBar