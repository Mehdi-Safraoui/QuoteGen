import React, { createContext, useEffect, useState , useContext } from "react";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth ,(user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const value ={
    user,
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default function useAuth(){
  return useContext(AuthContext)
}

