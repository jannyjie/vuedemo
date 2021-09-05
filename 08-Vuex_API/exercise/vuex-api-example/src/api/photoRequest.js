import axios from "axios";
const photoRequest = axios.create({
    // 連結整個專案API 總管位置
  baseURL: "https://vue-lessons-api.herokuapp.com/",
});
// 我要抓去相簿功能用的圖片位子
// getPhotoRequest 變數 
// 這個就等於原本抓資料的方式
export const getPhotoRequest = () => photoRequest.get("/photo/list");