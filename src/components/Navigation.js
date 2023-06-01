import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";

const Navigation = ({ userObj }) => {
  return (
    <nav className="Navigation">
      <Nav>
        <Link to="/">
          <NavHome>
            <RiHome7Fill
              size={30}
              color="black"
              style={{ marginRight: "13px" }}
            />
            <p style={{ fontSize: "23px" }}>Home</p>
          </NavHome>
        </Link>

        <Link to="/profile">
          <NavHome>
            <CgProfile
              size={30}
              color="black"
              style={{ marginRight: "13px" }}
            />
            <p style={{ fontSize: "23px" }}>Profile</p>
          </NavHome>
        </Link>
        <NavHome>
          <IoNotificationsOutline
            size={30}
            color="black"
            style={{ marginRight: "13px" }}
          />
          <p style={{ fontSize: "23px" }}>Notifications</p>
        </NavHome>
        <NavHome>
          <TbMessageCircle
            size={30}
            color="black"
            style={{ marginRight: "13px" }}
          />
          <p style={{ fontSize: "23px" }}>Messages</p>
        </NavHome>
        <NavHome>
          <CiViewList size={30} color="black" style={{ marginRight: "13px" }} />
          <p style={{ fontSize: "23px" }}>Lists</p>
        </NavHome>
        <NavHome>
          <BsBookmarks
            size={30}
            color="black"
            style={{ marginRight: "13px" }}
          />
          <p style={{ fontSize: "23px" }}>Bookmarks</p>
        </NavHome>
      </Nav>
    </nav>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

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
  text-align: left;
  justify-content: flex-end;

  text-decoration-line: none;

  /* background-color: white; */
`;
