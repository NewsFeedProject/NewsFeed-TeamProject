import { createContext, useState } from "react";

export const SingUpContext = createContext(null);

function SingUpContextProvider({ children }) {
  // 이미지
  const [imgURL, setImgURL] = useState("");
  // 이미지 업로드를 위한 state
  const [prevImg, setPrevImg] = useState([]);
  // user이름
  const [userName, setUserName] = useState("");
  // user ID만
  const [userId, setUserId] = useState("");
  // 유저 email 만
  const [userMail, setUserMail] = useState("");
  // 비밀번호 확인
  const [reUserPassword, setReUserPassword] = useState("");
  // checkbox
  const [checkBox, setCheckBox] = useState(false);
  return (
    <SingUpContext.Provider
      value={{
        imgURL,
        setImgURL,
        userName,
        setUserName,
        userId,
        setUserId,
        userMail,
        setUserMail,
        reUserPassword,
        setReUserPassword,
        checkBox,
        setCheckBox,
        prevImg,
        setPrevImg
      }}
    >
      {children}
    </SingUpContext.Provider>
  );
}

export default SingUpContextProvider;
