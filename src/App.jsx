import React from "react";
import SignUp from "./components/signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <SignUp />
      <ToastContainer />
    </>
  );
};

export default App;



