import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import styled from "styled-components";

function Mypage() {
  const params = useParams();
  const usersContext = useContext(UsersContext);
  const foundUser = usersContext.users.find((user) => {
    return user.uid === params.uid;
  });

  // const [userData, setUserData] = useState({
  //   uid: params.uid,
  //   userName: "",
  //   userEmail: "",
  //   userPassword: "",
  //   userProfileImage: ""
  // });
  // const [emailPrefix, setEmailPrefix] = useState("");
  // const [emailSuffix, setEmailSuffix] = useState("");
  // const [customSuffix, setCustomSuffix] = useState("");
  // const [isCustomSuffix, setIsCustomSuffix] = useState(true);
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  // const [profileImageFile, setProfileImageFile] = useState(null);

  // useEffect(() => {
  //   const currentUser = usersContext.users.find((user) => user.uid === params.uid);
  //   setUserData(currentUser);
  //   const [prefix, suffix] = currentUser.userEmail.split("@");
  //   setEmailPrefix(prefix);
  //   setEmailSuffix(suffix);
  //   if (suffix !== "") {
  //     setIsCustomSuffix(true);
  //   }
  // }, [params.uid, usersContext.users]);

  return (
    <>
      <h3>Mypage</h3>
      <div>
        {foundUser.userProfileImage && (
          <img style={{ width: "50px", height: "50px" }} src={foundUser.userProfileImage} alt="프로필 이미지" />
        )}
        {foundUser.userEmail}님
      </div>
      <div></div>
    </>
  );
}

export default Mypage;
