import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/signup";

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Rout;
