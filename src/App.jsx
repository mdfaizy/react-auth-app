import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
// import DesignerChoose from "./components/pages/DesignerChoose";
import Login from "./components/pages/Login";
import ProfileUpload from "./components/pages/ProfileUpload";
import SignUpFrom from "./components/pages/SignUpFrom";
import EmailVerify from "./components/pages/EmailVerify";
// import Home from "./home/Home";
function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      {token !== null && <Header />}
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<SignUpFrom />} />
        <Route path="/login" element={<Login />} />
        {token === null && (
          <>
            <Route path="/user/:id/:token" element={<EmailVerify />} />
          </>
        )}
        <Route path="/profile" element={<ProfileUpload />} />
        {/* <Route path='/designerChoose' element={<DesignerChoose />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
