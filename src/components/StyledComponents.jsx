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
background-color: #292929;
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

export const ExerciseCardDiv = styled.div`
  padding: 2rem 1rem;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
      rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 80%;
    margin: auto auto;
    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1rem;
    .btn {
      padding: 1rem 2rem;
      border: none;

      background-color: #1460e5;
      text-transform: capitalize;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      color: #fff;
      font-size: 100%;
      font-weight: 500;
      &:hover {
        color: #1460e5;
        background-color: #fafafa;
      }
    }
    .btn2 {
      color: #1460e5;
      background-color: #fafafa;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      &:hover {
        background-color: #1460e5;
        color: #fff;
      }
    }
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    width: 40vw;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    box-sizing: border-box;
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
        rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
    }
    .image {
      width: 90%;
      margin: auto auto;
      img {
        width: 100%;
      }
    }

    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.7rem 1rem;
        border-radius: 9px;
      }
    }
    h3 {
      word-break: word-break;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    width: 100%;
    height: max-content;
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
        border-radius: 9px;
      }
    }
  }
`;

