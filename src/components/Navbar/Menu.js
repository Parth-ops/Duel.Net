import React from 'react'
import { Navbar,  NavDropdown,  Nav, Container } from 'react-bootstrap';
import { GiCrownCoin } from "react-icons/gi";



const Menu = ({updateUser}) =>{
  var myuser = JSON.parse(localStorage.getItem("MyUser"))
  return(
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="http://localhost:3000/">DUEL.NET</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="http://localhost:3000/pricing">Pricing</Nav.Link>
      <NavDropdown title="Games" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Valorant</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">League Of Legends</NavDropdown.Item>
        <NavDropdown.Divider />

      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link className="coins" id="coin" href="http://localhost:3000/pricing">{myuser.dcoins} <GiCrownCoin/></Nav.Link>
      <Nav.Link className="button" onClick={() => updateUser({})}>Logout</Nav.Link>
      <Nav.Link eventKey={2} href="http://localhost:3000/profile">
        Welcome {myuser.name}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  )
    
}

export default Menu;