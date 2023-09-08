import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_random } from "../actions/ActionTypes";

export default function Random() {
  const dispath = useDispatch();
  const random = useSelector((r) => r.random);
  const handleRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    dispath(act_random(randomNumber));
  };
  return (
    <div>
      <h2>danh sach random:{JSON.stringify(random)}</h2>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
