import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import styled from "styled-components";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ["#9BD827", "#292929", "#F0F0F0"],
  };

  return (
    <LoaderDiv className="loader">
      <GooeyCircleLoader {...loaderProps} />
      <h2 className="text-2xl font-bold text-black">Move Lab</h2>
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  h2 {
    color: #1460e5;
    font-size: 1.5rem;
  }
`;

export default Loader;