import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";
import SignInSignOut from "./SignInSignOut";

function Header() {
  return (
    <NavBar>
      <NavbarBrand href="/"><h2 className="text-lime-400 font-bold font-mono">Move Lab</h2></NavbarBrand>
      <Nav.Link href="/workout-planner"><h5 className="text-lime-400">Workout Planner</h5></Nav.Link>
      <SignInSignOut />
    </NavBar>
  );
}

const NavBar = styled.nav`
  padding: 1rem 2rem 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #481865;
  box-shadow: rgba(60, 64, 67, 1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 1) 0px 1px 3px 1px;
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 1rem 0.5rem 1rem;
  }
`;

export default Header;