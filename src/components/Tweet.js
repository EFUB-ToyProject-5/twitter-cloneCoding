import { dbService } from "../myBase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { BsXCircle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

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
            <Input
              value={newTweet}
              placeholder="Edit your Tweet"
              required
              onChange={onChange}
            />
          </form>
          {/* 수정 취소 */}
          <BsXCircle
            onClick={toggleEditing}
            style={{ cursor: "pointer", marginLeft: "30px" }}
            size={20}
          />
          {/* 수정 완료 */}
          <BsCheckCircle
            onClick={onSubmit}
            style={{ cursor: "pointer", marginLeft: "10px" }}
            size={20}
          />
        </Content>
      ) : (
        <div>
          <Content>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
              <>
                <Button>
                  {/* 삭제하기 */}
                  <RiDeleteBin7Line
                    onClick={onDelete}
                    style={{ cursor: "pointer", marginLeft: "30px" }}
                    size={20}
                  />
                  {/* 수정하기 */}
                  <FiEdit3
                    onClick={toggleEditing}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    size={20}
                  />
                </Button>
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
  /* background-color: lightblue; */
  margin-top: 30px;
  margin-bottom: 30px;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
  border-color: lightgray;
  margin-bottom: 30px;
  font-size: 15px;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;
