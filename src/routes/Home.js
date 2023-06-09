import React, { useState, useEffect } from "react";
import { dbService } from "../myBase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import Tweet from "../components/Tweet";
import styled from "styled-components";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  //내가 적는 트윗
  const [nweets, setNweets] = useState([]);
  //불러오는 트윗들

  //저장 할 때마다 실시간으로 데이터 가져오도록 설정(snapshot 활용)
  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  //submit할 때마다 작동함(데이터베이스에서 collection 가져옴)
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        //유저 아이디 추가!
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setNweet("");
  };

  // 입력값 바뀔 때마다 작동
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  return (
    <div className="Home">
      <ForYou>
        <div>For You</div>
        <div>Following</div>
      </ForYou>
      <form
        onSubmit={onSubmit}
        style={{ borderBottom: " 1px solid lightgray" }}
      >
        <Input
          type="text"
          value={nweet}
          placeholder="What is happening?"
          style={{ fontSize: "20px" }}
          maxLength={120}
          onChange={onChange}
        />
        <Submit type="submit" value="Tweet" />
      </form>

      <div key={nweet.id}>
        {nweets.map((nweet) => (
          <Tweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;

const Input = styled.input`
  width: 500px;
  height: 100px;
  border-radius: 10px;
  margin-right: 10px;
  border-style: none;
  margin-left: 75px;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const Submit = styled.input`
  height: 40px;
  width: 100px;
  border-radius: 30px;
  background-color: #1da1f2;
  border-style: none;
  color: white;
`;

const ForYou = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  padding-bottom: 26px;
`;
