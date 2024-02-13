import PostCards from "components/posts/PostCards";
import { PostContext } from "context/PostContext";
import Detail from "pages/Detail";
import React, { useContext } from "react";

export default function WorkInfo() {
  const category = "취업 정보";
  return (
    <>
      <Detail category={category} />
    </>
  );
}
