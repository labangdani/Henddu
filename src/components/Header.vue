<template>
  <div
    class="header top-0 fixed z-50 w-full h-16 transition duration-700"
    :class="[!isTop && 'bg-background']"
  >
    <div class="header__overlay absolute inset-0 w-full h-full"></div>
    <div class="relative z-10 flex items-center justify-between w-full h-full p-5 px-4 md:px-12">
      <div class="flex items-center">
        <mobile-nav class="lg:hidden" />
        <router-link to="/">
          <img :src="logo" alt="logo" class="h-full w-28 object-cover ml-4"/>
        </router-link>        
        <div class="items-center space-x-16 hidden lg:flex lg:ml-12 text-lg font-bold"
         v-if="this.$store.state.user.id != -1">
          <div v-for="route in routes"
            :key="route.path"
            :class="{menuclass: currentRoute.name === route.name} ">
            <router-link
              :to="route.path"
              role="presentation"
            
              aria-selected="false"
              v-on:click="get_menu(route.name)"
            >
                {{ route.name }}
            </router-link>
          </div>
          
        </div>
      </div>
      <Search v-if="this.$store.state.user.id != -1" />


<!-- <form class="flex items-center" v-if="this.$store.state.user.id != -1">   
    <div class="relative w-full">
        <input type="text" id="simple-search" class="text-white placeholder-white bg-transparent text-lg rounded-lg block w-full mx-20 p-3 py-1.5" placeholder="Rechercher un programme, une vidéo..." required>
    </div>
    <button type="submit" class="pl-10">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form> -->


      <button class="btn-order1 rounded-full" type="submit" v-if="this.$store.state.user.id == -1"><router-link to="/login" class="bold nav-link active">Se connecter</router-link></button>
      <div class="flex items-center space-x-4 justify-end" v-else>
        <router-link to="/user/profile">
          <label class="text-lg font-bold capitalize">{{ user.username }}</label>
        </router-link>
        <div>
          <img class="h-12 w-12 mt-1 rounded-full" :src= user.image.url alt="Image de profile" v-on:click="toggleDropdown()" ref="btnDropdownRef" />  
        </div>
       
        <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-black text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
          <router-link to="/user/profile" class="text-sm hover:bg-gray-800 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700">
            Mon compte
          </router-link>
          <a href="#" class="text-sm py-2 px-4 hover:bg-gray-800 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700">
            Mes favoris
          </a>
          <div class="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25"></div>
          <a href="" v-on:click="logout()" class="text-sm hover:bg-gray-800 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700">
            Déconnexion
          </a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import useHeaderRoute from "../hooks/useHeaderRoute";
import Search from "./Search.vue";
import Image from "../components/Image.vue";
import logo from "../assets/logo.png";
import MobileNav from "./MobileNav.vue";
import { ref, watch } from 'vue';
import { mapState} from 'vuex';
import { createPopper } from "@popperjs/core";
import CircleButton from './CircleButton.vue';


export default {

  components: {
    Search,
    MobileNav,
    Image,
    CircleButton,
  },

  data() {
    return { 
      logo,
      message_error:'',
      input:'',
      connect:false,
      user:{
        name:'',
        image:{
          url:''
        },
        username:'',
        surname:'',
        telephone:'',
        email:'',
      },
      dropdownPopoverShow: false,
      menu:''
    }
  },

  computed:{
    ...mapState({
      videos:'videos'
    }),
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getconnection()
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0;
    },

    toggleDropdown(){
      if(this.dropdownPopoverShow){
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-end"
        });
      }
    },

    getconnection(){
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user){
        this.connect = true
      }
      console.log(this.user)
    },

    input_show (){
      this.input = 'ok'
      this.$store.dispatch('get_videos');
    },

    input_dismiss(){
      this.input = ''
    },
    
    get_menu(){
      this.menu = 'Programm';
    },

    logout(){
      this.$store.commit('logout')
    },

    home(){
      this.$router.push ('/')
    },
  },

  setup(){
    const { currentRoute, routes } = useHeaderRoute(); 
    const isTop = ref(true);
    let user_search_movies = ref('');
    watch(user_search_movies, (newValue) => {
      this.$store.dispatch('get_videos');
      console.log(newValue);
    })

    return{
      currentRoute,
      routes,
      isTop,
      user_search_movies,
    }
  }

};
</script>
<style>
/* From Netflix */
.header__overlay {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, rgba(0, 0, 0, 0.7)),
    color-stop(10%, rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
}
 
    .btn-order1{
      background-color: #07693A;
      border: none;
      width: 150px;
      height: 40px;
      color: white;
      font-weight: bold;
      transition: all 0.5s ease;
    }
    .btn-order1:hover{
      transform: scale(1.1);
    }

    /* .profile-img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 150px;
    } */

    .menuclass{
      @apply inline-block focus:text-gray-300 focus:border-gray-300 border-b-4 text-lg font-netflix_medium transition duration-300 font-bold;
    }


</style>