import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ userObj }) => {
  return (
    <nav className="Navigation">
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      </Nav>
    </nav>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  /* padding: 10px 10px 10px 10px;
  height: 100vh;
  width: 100px;
  padding: 10px;
  width: 100vh;
  padding-left: 100px; */
`;
