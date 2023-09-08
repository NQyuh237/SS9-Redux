import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACT_INCREASE, ACT_DECREASE } from "../constrains";

function Count() {
  // lấy dữ liệu về
  const count = useSelector((c) => c.count); // lấy ở trong reducer file count.js
  const dispath = useDispatch(); // dispath dùng để gửi đi hành động
  // Bước1: Hàm gửi sự kiện lên reducer
  const handleIncrese = () => {
    dispath({
      type: ACT_INCREASE,
    });
  };
  const handleDecrease = () => {
    dispath({
      type: ACT_DECREASE,
    });
  };
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrese}>Count</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default Count;
