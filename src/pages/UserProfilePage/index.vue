<template>
    <div class="pt-24 pb-12 relative z-1 bg-gradient-to-b from-[#07693A] to-black wrapper px-20 xl:pt-48">
        <h1 class="text-white font-bold pb-4 xl:pb-16 text-3xl xl:text-4xl">Mon compte</h1>
        <div class="flex">
            <div class="xl:w-52 xl:shrink-0 xl:pl-0 xl:mb-0 md:pl-8 pl-5 mb-4">
                <ul class="space-y-5">
                    <li class="pl-6 text-lg "><button :class="{usermenuclass: connect === 'infos' || connect === ''}" @click="getInfos()">Mes infos</button></li>
                    <li class="pl-6 text-lg "><button :class="{usermenuclass: connect === 'favoris'}" @click="getFavoris()">Mes favoris</button></li>
                </ul>
            </div>
            <UserProfileForm v-if="issprofile==true"></UserProfileForm>
            <UserFavoris v-else></UserFavoris>
        </div>
    </div>
</template>

<script>
    import UserProfileForm from '../../components/Forms/UserProfileForm.vue';
    import UserFavoris from '../../components/Forms/UserFavoris.vue';
    import {Api} from '../../helpers';
    import { ref } from "vue";


    export default {

    data(){
        return{
           issprofile:true, 
           connect:'',
        }
    },

      components: {
        UserProfileForm,
        UserFavoris,
      },

      methods:{
        getInfos(){
            this.issprofile = true;
            this.connect = 'infos'
        },

        getFavoris(){
            this.issprofile = false;
            this.connect = 'favoris'
        }

        }
}

  </script>
  

<style>

.usermenuclass{
    @apply text-xl font-bold border-l-4 pl-2 transition duration-300
    }
</style>
