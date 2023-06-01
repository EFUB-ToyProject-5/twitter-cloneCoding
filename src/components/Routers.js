import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";
import styled from "styled-components";
import { ImTwitter } from "react-icons/im";
import twitter from "../imgs/twitter.png";

const Routers = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Naviga>
        <Bar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginTop: "10px",
            }}
          >
            <img src={twitter} style={{ width: "60px", height: "60px" }} />
            {/* <ImTwitter size={30} /> */}
          </div>

          {isLoggedIn && <Navigation userObj={userObj} />}
        </Bar>

        {isLoggedIn ? (
          <div style={{ marginTop: "0" }}>
            <Routes>
              <Route path="/" element={<Home userObj={userObj} />}></Route>
              <Route
                path="/profile"
                element={<Profile userObj={userObj} />}
              ></Route>
            </Routes>
          </div>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )}

        <div>
          <div style={{ borderLeft: "1px solid lightgray", height: "100vh" }}>
            <Trend>
              <b>Trend For you</b>
            </Trend>
          </div>
        </div>
      </Naviga>
    </Router>
  );
};

export default Routers;

const Naviga = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100vh;
  /* background-color: skyblue; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const Bar = styled.div`
  /* background-color: yellow; */
  height: 100vh;
  border-right: 1px solid lightgray;
`;

const Trend = styled.div`
  background-color: rgb(217, 217, 217);
  border-radius: 30px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
