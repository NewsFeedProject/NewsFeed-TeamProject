import PostCards from "components/posts/PostCards";
import { PostContext } from "context/PostContext";
import Detail from "pages/Detail";
import React, { useContext } from "react";

export default function CompanyInfo() {
  const category = "회사 정보 공유";
  return (
    <>
      <Detail category={category} />
    </>
  );
}
