import { reactive, readonly } from "vue";
import { createStore } from 'vuex'
import axios from 'axios';
import setAuthHeader  from './utils';
import {Api} from './helpers'


const initialState = reactive({
  isModalActive: false,
  scrollTop: 0,
  modalData: null,
});

export const setModalActive = function (isActive) {
  // Keep scrollTop
  if (isActive) {
    const scrollTop = document.documentElement.scrollTop;

    initialState.scrollTop = scrollTop;
  }

  initialState.isModalActive = isActive;
};

export const setModalData = function (data) {
  initialState.modalData = data;
};

export const state = readonly(initialState);

let user = localStorage.getItem('user');

if (!user){
    user = {
        id: -1,
        token: '',
    };
}else{
    try {
        user = JSON.parse(user);
        axios.defaults.headers.common['Authorization'] = user.token;
    } catch (ex) {
        user = {
            id: -1,
            token: '',
        };
    }
}


const store = createStore({
  state:{
      status: '',

      user: user,

    sections:{
        id:'',
        titre:'',
        filtre:'',
        videos:[]
    }, 

      userInfos:{
          id: '',
          token: '',
      },
      videos:{
          id:'',
          fileName:'',
          title:'',
          description:'',
          duration:'',
          years:'',
          size:'',
          url:'',
          image:'',
          created:'',
          modified:'',
          artist:'',
          album:'',
          genres: [],
          likedUsers: [],
          playlists: [],
          comments: []
      },

      images:{
        id:'',
        name:'',
        size:'',
        url:''
      },

      categories:{
        description:'',
        id:'',
        name:'',
        images:'',
        videos:[],
      },

      getstreams:{
        id:'',
        description:'',
        titre:'',
        images:[],
      }
  },
  mutations: {
    setStatus: function (state, Status) {
        state.status = Status 
    },
    logUser: function (state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;
    },
    userInfos: function(state, userInfos){
        state.userInfos = userInfos
    },
    videos: function (state, videos){
        state.videos = videos
    },
    sections: function (state, sections){
    state.sections = sections
    },
    categories: function (state, categories){
    state.categories = categories
    },
    getstreams: function (state, getstreams){
        state.getstreams = getstreams
        },
    images: function (state, images){
        state.images = images
        },
    logout:function(state){
        state.user = {
            id: -1,
            token:'',
        }
        localStorage.removeItem('user')
    }
  },
  actions:{

      // ************ACTION LOGIN****************

      loginToEmail:({commit}, userInfos) =>{
          commit('setStatus','loading');
          return new Promise((resolve, reject) => {
            Api.post('/authentication/api/auth/signin-email',userInfos)
              .then(function (response) {
                  commit('setStatus','');
                  commit('logUser',response.data);
                  resolve(response);
                  console.log(user.token)
              }).catch(function(error) {
                  commit('setStatus','error_login');
                  reject(error);
              })
          });
      },

      

      loginToPhone:({commit}, userInfos) =>{
          commit('setStatus','loading');
          return new Promise((resolve, reject) => {
            Api.post('/authentication/api/auth/signin-phone',userInfos)
              .then(function (response) {
                  commit('setStatus','');
                  commit('logUser',response.data);
                  resolve(response);
              }).catch(function(error) {
                  commit('setStatus','error_login');
                  reject(error);
              })
          });
      },

      loginToUsername:({commit}, userInfos) =>{
          commit('setStatus','loading');
          return new Promise((resolve, reject) => {
              Api.post('/authentication/api/auth/signin-username',userInfos)
              .then(function (response) {
                  commit('setStatus','');
                  commit('logUser',response.data);
                  resolve(response);

                  localStorage.setItem("jwtToken", response.data.token)
                  setAuthHeader(response.data.token)
              }).catch(function(error) {
                  commit('setStatus','error_login');
                  reject(error);
              })
          });
      },

      // ************ACTION LOGIN****************

      // logout:({commit}, userInfos) =>{
      //     return new Promise((resolve, reject) => {
      //         commit;
      //         axios.post('http://localhost:8080/authentication/api/auth/signout',userInfos)
      //         .then(function (response) {
      //             resolve(response);
      //         }).catch(function(error) {
      //             reject(error);
      //         })
      //     });
      // },

      // ************ACTION CREATE ACOUNT****************

      createAcount:({commit}, userInfos) =>{
          return new Promise((resolve, reject) => {
              commit;
              Api.post('/authentication/api/auth/signup-email',userInfos)
              .then(function (response) {
                  commit('setStatus','');
                  commit('logUser',response.data);
                  resolve(response);
              }).catch(function(error) {
                  commit('setStatus','error_create');
                  reject(error);
              })
          });
      },


      // ************ACTION GET VIDEOS****************

      get_videos:({commit})=>{
          Api.get('/streamvod/rest/videos/all')
          .then(function (response) {
              commit('videos',response.data.content);
              console.log(response.data.content);
          }).catch(function(err) {
              console.log(err);
          })
      },

      get_getstreams:({commit})=>{
          Api.getwithouttoken('/streamvod/api/invite/guest-screen/all')
          .then(function (response) {
              commit('getstreams',response.data.content);
              console.log(response.data.content);
          }).catch(function(err) {
              console.log(err);
          })
      },

      get_categories:({commit})=>{
          Api.get('/streamvod/rest/categories/all')
          .then(function (response) {
              commit('categories',response.data.content);
              console.log(response.data.content);
          }).catch(function(err) {
              console.log(err);
          })
      },

      get_categorie_videos:({commit},id_categorie)=>{
          Api.get('/streamvod/rest/videos/'+id_categorie+'/videos')
          .then(function (response) {
              commit('videos',response.data.content);
              console.log(response.data.content);
          }).catch(function(err) {
              console.log(err);
          })
      },

      get_sections:({commit})=>{

        Api.get('/streamvod/rest/section/all')
        .then(function (response) {
            commit('sections',response.data.content);
            console.log(response.data.content);
        }).catch(function(err) {
            console.log(err);
        })
    },

  },
})

export default store;

 
  
