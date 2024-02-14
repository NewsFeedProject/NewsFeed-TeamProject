import React from "react";
import Header from "components/common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";
import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100%;
  max-width: 100%;
`;

const StyledOutlet = styled(Outlet)`
  flex: 1;
  width: 100%;
`;

const BodyBoxs = styled.div`
  display: flex;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <BodyBoxs>
        <Navbar />
        <StyledOutlet />
      </BodyBoxs>
    </LayoutContainer>
  );
}

export default Layout;
