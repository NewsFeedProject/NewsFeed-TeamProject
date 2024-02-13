import Layout from "components/layout/Layout";
import PostForm from "components/posts/PostForm";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Mypage from "pages/Mypage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "components/login/Login";
import SignUp from "components/login/SignUp";
import Interview from "rootPages/Interview";
import WorkInfo from "rootPages/WorkInfo";
import CompanyInfo from "rootPages/CompanyInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "write", element: <PostForm /> },
      { path: "interView", element: <Interview /> },
      { path: "workInfo", element: <WorkInfo /> },
      { path: "companyInfo", element: <CompanyInfo /> },
      { path: "signup", element: <SignUp /> },
      { path: "mypage/:uid", element: <Mypage /> },
      { path: "detail", element: <Detail /> }
    ]
  },
  {
    path: "login",
    element: <Login />
  }
]);

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;

{
  /* <Link to="/interView">면접 후기</Link>
<Link to="/workInfo">취업 정보</Link>
<Link to="/companyInfo */
}

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="detail" element={<Detail />} />
//           <Route path="detail/write" element={<PostForm />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };
