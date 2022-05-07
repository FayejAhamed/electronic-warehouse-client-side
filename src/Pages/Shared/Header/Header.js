import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    console.log('me')
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
              <Nav.Link as={Link} to='/manage'> Manage Inventories</Nav.Link>
              <Nav.Link as={Link} to='/addnew'> Add New Items</Nav.Link>
              
            </Nav>
            <Nav>

              {
                user ? <Nav.Link onClick={handleSignOut} as={Link} to='/login'>Sign Out</Nav.Link> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>

              }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;