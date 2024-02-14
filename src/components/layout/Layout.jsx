import React from "react";
import Header from "components/common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";
import styled from "styled-components";

// 전체 레이아웃을 위한 컨테이너 스타일링
const LayoutContainer = styled.div`
  /* display: flex;
  flex-direction: column; // 세로 방향 레이아웃 */
  height: 100%; // 전체 화면 높이
  display: grid;
  grid-template-columns: 20rem 3fr;
  grid-template-rows: 10rem 3fr;
`;

// Navbar 컴포넌트를 위한 스타일링
const StyledNavbar = styled(Navbar)`
  flex: 1; // Navbar가 남은 공간을 모두 차지하도록 설정
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <StyledNavbar />
      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  );
}

export default Layout;
