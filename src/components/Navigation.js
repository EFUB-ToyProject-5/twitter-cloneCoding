import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navigation = ({ userObj }) => {
  return (
    <nav className="Navigation">
      <Nav>
        <Link to="/">
          <NavHome>
            <RiHome7Fill
              size={30}
              color="black"
              style={{ marginRight: "10px" }}
            />
            <p>Home</p>
          </NavHome>
        </Link>

        <Link to="/profile">
          <NavHome>
            <CgProfile
              size={30}
              color="black"
              style={{ marginRight: "10px" }}
            />
            <p>Profile</p>
          </NavHome>
        </Link>
      </Nav>
    </nav>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  /* background-color: gray; */

  /* align-items: center; */

  /* padding: 10px 10px 10px 10px;
  height: 100vh;
  width: 100px;
  padding: 10px;
  width: 100vh;
  padding-left: 100px; */
`;

const NavHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  justify-content: flex-end;
  text-decoration-line: none;
  /* background-color: white; */
`;
