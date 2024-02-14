import HomePage from "components/homePage/HomePage";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <MainHome>
      <HomePage />
    </MainHome>
  );
}
const MainHome = styled.div`
  height: 100%;
  width: 100%;
`;