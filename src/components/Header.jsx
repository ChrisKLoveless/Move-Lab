import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignInSignOut from "../Pages/Auth/SignInSignOut";

function Header() {
  return (
    <div className="header mt-3">
      <Navbar bg='slate-300' expand='lg'>
        <NavbarBrand href="/"><h2>Move Lab</h2></NavbarBrand>
          <Nav>
            <Nav.Link href="/curated-workouts"><h5>Curated Workouts</h5></Nav.Link>
          </Nav>
          <SignInSignOut />
      </Navbar>
    </div>
  );
}

export default Header;