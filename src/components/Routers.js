import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";
import styled from "styled-components";

const Routers = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Naviga>
        <div className="navi">
          {isLoggedIn && <Navigation userObj={userObj} />}
        </div>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj} />}></Route>
              <Route
                path="/profile"
                element={<Profile userObj={userObj} />}
              ></Route>
            </>
          ) : (
            <Route path="/" element={<Auth />}></Route>
          )}
        </Routes>
      </Naviga>
    </Router>
  );
};

export default Routers;

const Naviga = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
`;
