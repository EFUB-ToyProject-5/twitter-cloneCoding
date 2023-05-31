import { dbService } from "../myBase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";

const Tweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(nweetObj.text);

  const onDelete = async () => {
    const ok = window.confirm("트윗을 지우시겠습니까?");

    if (ok) {
      //delete(파이어베이스 사용)
      const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
      await deleteDoc(NweetTextRef);
    }
  };

  //수정하도록 토글 열어주는 함수
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  //수정이 반영되도록 하는 함수
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setNewTweet(value);
  };

  //수정된 글을 submit하는 함수(파이어베이스 사용)
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(nweetObj, newTweet);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
    await updateDoc(NweetTextRef, {
      text: newTweet,
    });
    setEditing(false);
  };

  return (
    <div className="Tweet">
      {editing ? (
        <Content>
          <form onSubmit={onSubmit}>
            <input
              value={newTweet}
              placeholder="Edit your Tweet"
              required
              onChange={onChange}
            />
          </form>
          <button onClick={toggleEditing}>Cancle</button>
          <button onClick={onSubmit}>update Tweet</button>
        </Content>
      ) : (
        <div>
          <Content>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
              <>
                <button onClick={onDelete}>Delete Tweet</button>
                <button onClick={toggleEditing}>Edit Tweet</button>
              </>
            )}
          </Content>
        </div>
      )}
    </div>
  );
};

export default Tweet;

const Content = styled.div`
  text-align: center;
  background-color: lightblue;
  margin-top: 50px;
  padding-top: 10px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
