import { UsersContext } from "context/UsersContext";
import { auth } from "data/firebase";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { getAuth, updateProfile, updatePassword, onAuthStateChanged } from "firebase/auth";

function Profile() {
  const params = useParams();
  const navigate = useNavigate();
  const currentUser = useContext(UsersContext);
  const [displayName, setDisplayName] = useState("");
  const [emailPrefix, setEmailPrefix] = useState("");
  const [emailSuffix, setEmailSuffix] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [profileURL, setProfileURL] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  console.log("profile.jsx currentUser", currentUser);

  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
      const emailParts = (currentUser.email || "").split("@");
      if (emailParts.length === 2) {
        setEmailPrefix(emailParts[0]);
        setEmailSuffix(emailParts[1]);
      }
    }
  }, [currentUser]);

  const handleUpdateProfile = async () => {
    if (password !== confirmPassword) {
      setError("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("사용자 정보를 가져올 수 없습니다.");
      }

      const email = `${emailPrefix}@${emailSuffix}`;
      const updatedFields = {};

      if (displayName) updatedFields.displayName = displayName;
      if (email) updatedFields.email = email;
      if (profileURL) updatedFields.profileURL = profileURL;

      await updateProfile(user, updatedFields);

      console.log("프로필 업데이트 성공");
    } catch (error) {
      setError(error.message);
      console.error("프로필 업데이트 실패:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfileURL(file);

    // 파일 선택 시 프로필 사진 미리보기 설정
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div>
      <h2>회원정보 수정</h2>
      {error && <p>{error}</p>}
      <div>
        프로필 사진<StSpan>*&nbsp;</StSpan>
        {previewImage ? (
          <StImg src={previewImage} alt="프로필 미리보기" />
        ) : (
          photoURL && <StImg src={photoURL} alt="프로필 이미지" />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginLeft: "10px" }} />
      </div>
      <label>
        디스플레이 이름:
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <br />
      <label>
        이메일:
        <input type="text" value={emailPrefix} onChange={(e) => setEmailPrefix(e.target.value)} />@
        <select value={emailSuffix} onChange={(e) => setEmailSuffix(e.target.value)}>
          <option value="">--이메일 선택--</option>
          <option value="gmail.com">gmail.com</option>
          <option value="naver.com">naver.com</option>
          <option value="daum.net">daum.net</option>
        </select>
      </label>
      <br />
      <label>
        새 비밀번호:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        확인 비밀번호:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleUpdateProfile}>프로필 업데이트</button>
    </div>
  );
}
export default Profile;

// const ProfileArea = styled.div`
//   padding: 10px 0 10px 20px;
// `;

const StImg = styled.img`
  width: 60px;
  height: 60px;
`;

// const StDiv = styled.div`
//   margin-top: 20px;
// `;

// const StInput = styled.input`
//   border: 1px solid #8f8f8f;
//   border-radius: 10px;
// `;

// const StInputEmail = styled.input`
//   width: 130px;
//   border: 1px solid #8f8f8f;
//   border-radius: 10px;
// `;

// const StSelect = styled.select`
//   margin-left: 5px;
//   padding: 3px;
//   width: 130px;
//   border: 1px solid #8f8f8f;
// `;

// const StDuplicateCheckBtn = styled.button`
//   margin-left: 10px;
//   width: 100px;
//   border: none;
//   border-radius: 10px;
//   background-color: #d9d9d9;
// `;

const StSpan = styled.span`
  color: red;
`;

// const StSubmit = styled.div`
//   margin-top: 20px;
//   text-align: center;
// `;

// const StSubmitBtn = styled.button`
//   width: 200px;
//   font-weight: 800;
//   border: none;
//   border-radius: 10px;
//   background-color: #d9d9d9;
// `;
