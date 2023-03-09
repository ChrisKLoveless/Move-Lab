import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import SignInSignOut from "./SignInSignOut";
import logo from "../assets/img/logo.png"
import { NavBar } from "./StyledComponents"

function Header() {
  return (
    <NavBar>
      <NavbarBrand href="/">
        <img src={logo} alt="" />
        <h2 className="text-xl font-sans font-bold" style={{ color: "#9BD827" }}>MOVE LAB</h2>
      </NavbarBrand>
      <Nav.Link href="/demo"><h5 className="font-bold" style={{ color: "#9BD827" }}>Search ExerciseDB</h5></Nav.Link>
      <Nav.Link href="/muscle"><h5 className="font-bold" style={{ color: "#9BD827" }}>Muscle Groups</h5></Nav.Link>
      <Nav.Link href="/category"><h5 className="font-bold" style={{ color: "#9BD827" }}>Categories</h5></Nav.Link>
      <SignInSignOut />
    </NavBar>
  );
}


export default Header;