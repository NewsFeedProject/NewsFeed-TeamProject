import { UsersContext } from "../../context/UsersContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

function Profile() {
  const params = useParams();
  const usersContext = useContext(UsersContext);
  const foundUser = usersContext.users.find((user) => {
    return user.uid === params.uid;
  });

  const [userData, setUserData] = useState({
    uid: foundUser.uid,
    userName: foundUser.userName,
    userEmail: foundUser.userEmail,
    userPassword: foundUser.userPassword,
    userProfileImage: foundUser.userProfileImage
  });
  const [emailPrefix, setEmailPrefix] = useState("");
  const [emailSuffix, setEmailSuffix] = useState("");
  const [customSuffix, setCustomSuffix] = useState("");
  const [isCustomSuffix, setIsCustomSuffix] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null);

  useEffect(() => {
    const currentUser = usersContext.users.find((user) => user.uid === params.uid);
    setUserData(currentUser);
    const [prefix, suffix] = currentUser.userEmail.split("@");
    setEmailPrefix(prefix);
    setEmailSuffix(suffix);
    if (suffix !== "") {
      setIsCustomSuffix(true);
    }
  }, [params.uid, usersContext.users]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "emailPrefix") {
      setEmailPrefix(value);
    } else if (name === "emailSuffix") {
      setEmailSuffix(value);
    }
    setUserData({
      ...userData,
      [name]: value
    });
    if (name === "emailSuffix" && isCustomSuffix) {
      setCustomSuffix(value);
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "직접 입력") {
      setIsCustomSuffix(true);
      setEmailSuffix("");
    } else {
      setIsCustomSuffix(false);
      setEmailSuffix(selectedValue);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImageFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 유효성 검사
    if (!userData.userName || !userData.userEmail || !userData.userPassword || !confirmPassword) {
      setErrorMessage("모든 필드를 채워주세요.");
      return;
    }

    if (userData.userPassword !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (isEmailDuplicate) {
      setErrorMessage("중복된 이메일 주소입니다.");
      return;
    }

    const email = isCustomSuffix ? emailPrefix + "@" + customSuffix : emailPrefix + "@" + emailSuffix;
    const updatedUserData = {
      ...userData,
      userEmail: email,
      userProfileImage: profileImageFile ? URL.createObjectURL(profileImageFile) : userData.userProfileImage
    };
    const updatedUsers = usersContext.users.map((user) => (user.uid === params.uid ? updatedUserData : user));
    usersContext.setUsers(updatedUsers);
    console.log("수정된 회원 정보:", updatedUserData);
  };

  const handleDuplicateCheck = () => {
    const isDuplicate = usersContext.users.some(
      (user) => user.userEmail === emailPrefix + "@" + emailSuffix && user.uid !== params.uid
    );
    setIsEmailDuplicate(isDuplicate);
    if (isDuplicate) {
      setErrorMessage("중복된 이메일 주소입니다.");
    } else {
      setErrorMessage("사용 가능한 이메일 주소입니다.");
    }
  };

  return (
    <>
      <div>Profile</div>
      <form onSubmit={handleSubmit}>
        <div>
          프로필 사진*
          {foundUser.userProfileImage && (
            <img style={{ width: "50px", height: "50px" }} src={userData.userProfileImage} alt="프로필 이미지" />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          이름*
          <input type="text" name="userName" value={foundUser.userName} onChange={handleInputChange} required />
        </div>
        <div>
          아이디*
          <input type="text" name="emailPrefix" value={emailPrefix} onChange={handleInputChange} required />
          @
          <input type="text" name="emailSuffix" value={emailSuffix} onChange={handleInputChange} required />
          <select value={isCustomSuffix ? "직접 입력" : emailSuffix} onChange={handleSelectChange}>
            <option value="직접 입력">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="yahoo.com">yahoo.com</option>
            <option value="hotmail.com">hotmail.com</option>
          </select>
          <button type="button" onClick={handleDuplicateCheck}>
            중복 확인
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        <div>
          비밀번호*
          <input
            type="password"
            name="userPassword"
            value={userData.userPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          비밀번호 재확인*
          <input type="password" onChange={(event) => setConfirmPassword(event.target.value)} required />
        </div>
        <div>
          <button type="submit">정보 수정</button>
        </div>
      </form>
    </>
  );
}

export default Profile;
