import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import AllQuotes from "./components/all-quotes";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/allquotes" Component={AllQuotes} />
        </Routes>
        <Main />
        <Footer />
      </Router>
    </>
  );
};

export default App;
