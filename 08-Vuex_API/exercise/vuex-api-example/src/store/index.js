import { createStore } from "vuex";
import axios from "axios";
import { apiGetPhotoRequest } from "../api";
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    // 方法三 async await
    async handInit({ commit }) {
      try{
        const res = await apiGetPhotoRequest()
        commit("init", res.data);
        return res.data;
      } catch(error) {
        console.error(error.response.data)
      }
    },

    //  handInit({ commit }) {
    //         const res = apiGetPhotoList();
    //         return res.then((response) => {
    //           commit("init", response.data);
    //           return response.data;
    //         });
    //       },

    //   async handInit({ commit }) {
    //           try {
    //             const res = await apiGetPhotoList();
    //             commit("setPhoto", res.data);
    //             return res.data;
    //           } catch (error) {
    //             console.error(error);
    //           }
    //         },

    // handInit({ commit }) {

    //   const res = apiGetPhotoRequest()
        //   // 方法二
    //   // return res.then(response=> {
    //   //   commit("init", response.data);
    //   //   return response.data;
    //   // });

    //   // 方法一
    //   // return axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
    //   // .then((res) => {
    //   //   console.log(2);
    //   //   commit("init", res.data);
    //   //   return res.data;
    //   // });
    // },
    handLoadStete({commit}, bool){
      commit('loadStete', bool)
    },
    handAdd({commit}){
      commit('Add')
    },
    handRemove({commit}){
      commit('Remove')
    }
  },
  mutations: {
    init(state, payload){
      state.photoArr = payload;
      console.log(state.photoArr);
    },
    loadStete(state, bool){
      state.isLoad = bool
    },
    Add(state){
      state.idx++;
      if(state.idx > state.photoArr.length - 1 ) {
        state.idx = 0 ;
      }
    },
    Remove(state) {
      state.idx--;
      if (state.idx < 0 ) {
        state.idx = state.photoArr.length - 1;
      }
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
