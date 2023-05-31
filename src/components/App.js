import Routers from "./Routers";
import React, { useEffect, useState } from "react";
import { authService } from "../myBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../App.css";

function App() {
  const [init, setInit] = useState(false);
  //초기화 상태 (초기값은 초기화 되지 않음)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  //사용자가 누구인지

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
        setUserObj(user);
        //로그인돼서 유저가 생기면 userObj상태에 넣어준다.
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? (
        <Routers isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
    </div>
  );
}

export default App;
