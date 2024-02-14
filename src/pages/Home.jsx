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
  flex: 1;
  height: 100%;
`;
