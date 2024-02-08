// App.js
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebasePark/firebaseConfigPark";
import AuthPark from "./AuthPark";
import DetailPark from "./DetailPark";
import FileUploadPark from "components/common/FileUploadPark";

const DetailTestApp = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);

  return (
    <div>
      <AuthPark />
      <DetailPark />
      <FileUploadPark />
    </div>
  );
};

export default DetailTestApp;
