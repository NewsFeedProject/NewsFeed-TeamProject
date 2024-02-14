import React from "react";
import Header from "components/common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}></div>
      <Navbar />
      {children}
      <Outlet />
    </>
  );
}

export default Layout;
