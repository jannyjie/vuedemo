const Add = (a, b) => {
    return a + b;
}

// 單一個 export 可選擇要不要丟出去
export const Name = "mike";
export const age = 12;

// export 出去可以很多個但是只能用const變數的方式丟出去如果要export一個functiont 出去需要下面這樣
export const Remove = (a, b) => {
    return a - b;
};

//一個Module 只會有一個 default
export default Add;