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
    // console.log('me')
  }
  return (
    <div  className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Warehouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/blogs'> Blogs</Nav.Link>
              {/* <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link> */}
             {
               user && <>
                <Nav.Link as={Link} to='/manage'> Manage Items</Nav.Link>
               <Nav.Link as={Link} to='/addnew'> Add Items</Nav.Link>
               <Nav.Link as={Link} to='/myitems'> My Items</Nav.Link>
               </>
             }
              
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