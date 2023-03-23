<template>
  <div
    class="header top-0 fixed z-50 w-full h-16 transition duration-700"
    :class="[!isTop && 'bg-background']"
  >
    <div class="header__overlay absolute inset-0 w-full h-full"></div>
    <div class="relative z-10 flex items-center justify-between w-full h-full p-5 px-4 md:px-12">
      <div class="flex items-center">
        <mobile-nav class="lg:hidden" />

        <img :src="logo" alt="logo" class="h-full w-28 object-cover ml-4" />

        <div class="items-center space-x-16 hidden lg:flex lg:ml-12 text-lg font-bold">

         <router-link
            v-for="route in routes"
            :to="route.path"
            :key="route.path"
            class="
              hover:text-gray-300
              text-lg
              font-netflix_medium
              transition
              duration-300
              font-bold
            "
            :class="[
              currentRoute.name === route.name
                ? 'text-white'
                : 'text-typography',
            ]"
          >
            {{ route.name }}
          </router-link>
        </div>
      </div>


      <Search />

      <button class="btn-order1 rounded-full" type="submit" v-if="this.$store.state.user.id == -1"><router-link to="/login" class="bold nav-link active">Se connecter</router-link></button>
      <!-- <button class="btn-order1 rounded-full" type="submit" v-if="connect==false"><router-link to="/login" class="bold nav-link active">Se connecter</router-link></button> -->
      <div class="flex items-center space-x-4 justify-end" v-else>
        <label class="text-lg font-bold">Mon compte</label>
        <img src="/src/assets/images/profile.png" alt="Image de profile" v-on:click="toggleDropdown()" ref="btnDropdownRef" class="w-12 shadow-lg border-4 border-white rounded-full" >
        <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-black text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700">
            Mon compte
          </a>
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700">
            Mes favoris
          </a>
          <div class="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25"></div>
          <a href="" v-on:click="logout()" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700">
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
import logo from "../assets/logo.png";
import MobileNav from "./MobileNav.vue";
import { ref, watch } from 'vue';
import { mapState} from 'vuex';
import { createPopper } from "@popperjs/core";


export default {

  components: {
    Search,
    MobileNav,
  },

  data() {
    return { logo,
            message_error:'',
            input:'',
            connect:false,
            user:'',
            dropdownPopoverShow: false

    }
  },

  computed:{
    ...mapState({
      videos:'videos'
    }),
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // this.getconnection()
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0;
    },

    toggleDropdown: function(){
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
      this.user = localStorage.getItem('user');
      if (this.user){
        this.connect = true
      }
    },

    input_show (){
      this.input = 'ok'
      this.$store.dispatch('get_videos');
    },
    input_dismiss(){
      this.input = ''
    },

    logout(){
      this.$store.commit('logout')
      this.$router.push ('/login')
    },

    verifie_connection(){
      console.log(this.$store.state.user)
      if (this.$store.state.user.id == -1){
        this.message_error = 'non connecté'
          this.$router.push ('/')
      }
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

    .profile-img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 150px;
    }


</style>