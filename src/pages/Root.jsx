import React from "react";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Link to="/interView">면접 후기</Link>
      <Link to="/workInfo">취업 정보</Link>
      <Link to="/companyInfo">회사 정보 공유</Link>
      <Outlet />
    </>
  );
}
