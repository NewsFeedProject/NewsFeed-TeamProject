import PostCards from "components/posts/PostCards";
import { PostContext } from "context/PostContext";
import Detail from "pages/Detail";
import React, { useContext } from "react";

export default function Interview() {
  const category = "면접 후기";
  return (
    <>
      <Detail category={category} />
    </>
  );
}
