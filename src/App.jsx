import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import AllQuotes from "./components/all-quotes";
import { AuthProvider } from "./auth-context";
import Profile from "./components/profile";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allquotes" element={<AllQuotes />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
