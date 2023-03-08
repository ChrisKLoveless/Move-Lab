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
        <h2 className="text-lime-400 text-2xl font-bold font-mono">Move Lab</h2>
      </NavbarBrand>
      <Nav.Link href="/muscle"><h5 className="text-lime-400">Exercises by Muscle</h5></Nav.Link>
      <Nav.Link href="/category"><h5 className="text-lime-400">Exercises by Category</h5></Nav.Link>
      <Nav.Link href="/demo"><h5 className="text-lime-400">Exercises with Demo</h5></Nav.Link>
      <SignInSignOut />
    </NavBar>
  );
}


export default Header;