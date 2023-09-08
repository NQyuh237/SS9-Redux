import { combineReducers } from "redux";
import { count } from "./Count";
import { random } from "./random";
// combineReducers: giúp gộp tất cả các dữ liệu trong ứng dụng thành 1 store duy nhất

export const reducer = combineReducers({ count, random });
