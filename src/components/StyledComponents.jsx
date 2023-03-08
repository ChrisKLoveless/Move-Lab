import React from "react";
import styled from "styled-components";



export const Div = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const NavBar = styled.nav`
padding: 1rem 2rem 0.5rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #393939;
img {
  height: 3rem;
  width: 3rem;
  float: left;
}
box-shadow: rgba(60, 64, 67, 1) 0px 1px 2px 0px,
  rgba(60, 64, 67, 1) 0px 1px 3px 1px;
@media screen and (min-width: 280px) and (max-width: 768px) {
  padding: 1rem 1rem 0.5rem 1rem;
}
`;

export const SearchBar = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  height: 5vh;
`;
export const SearchWords = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  height: 5vh;
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  margin-top: 7rem;
    }
`;