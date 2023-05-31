import { getAuth, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { dbService } from "../myBase";

const Profile = ({ userObj }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const onLogOutClick = () => {
    signOut(auth);
    navigate("/");
  };

  //파이어베이스에서 받아옴
  const getMyNweets = async () => {
    //누가 로그인 했는지 알아야 그 사람의 프로필을 보여줄 수 있다.
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
