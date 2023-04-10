<template>
    <section class="wrapper">
        <div class="grid grid-cols-3 h-[850px]" >

            <div class="col-span-1 bg-gradient-to-r from-[#07693A] to-green-600 text-white">
                <!-- <div class="">  -->
                    <div class="flex justify-center mt-10"> 
                        <header>
                            <!-- <img id="profile-image" @click="updatePhoto()" class="w-28 h-28 rounded-full" :src=user.image.url /> -->
                            <img :src="profileImageURL" class="w-28 h-28 mb-4 rounded-full" alt="Image de profil">
                            <form>
                            <input type="file" accept="image/jpeg, image/png" @change="onImageSelect">
                            
                            <!-- <svg class="h-8 w-8 text-white" type="file" @click="onImageSelect" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                            </svg> -->
                            </form>    
                        </header>
                    </div>
                    <div class="flex justify-center mt-5">
                        <div class="text-2xl capitalize text-center">
                            <!-- <h5>{{ user.username }}</h5> -->
                            <p></p>
                        </div>
                    </div>
                <!-- </div> -->
              
            </div>

            <div class="col-span-2 ">
                <div class="grid-rows-2 p-20">
                    <h6 class="text-2xl font-bold">Informations</h6>
                    <div class="h-0 mb-4 border border-solid border-t-0 border-black opacity-25"></div>
                    <div class=""> 
                        <form class="mt-8">
                            <div class="grid grid-cols-2 mb-4 mt-4 text-xl">
                                <p class="mb-0">Nom utilisateur</p>
                                <input class="text-gray-400 bg-transparent mb-0" v-model="username" />
                                    <!-- <svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg> -->
                            </div>
                            <hr>
                            <div class="grid grid-cols-2 mb-4 mt-8 text-xl">
                                <p class="mb-0"> Nom</p>
                                <input class="text-gray-400 bg-transparent mb-0" v-model="name" />
                            </div>
                            <hr>
                            <div class="grid grid-cols-2 mb-4 mt-8 text-xl">
                                <p class="mb-0">Prenom</p>
                                <input class="text-gray-400 bg-transparent mb-0" v-model="surname" />
                            </div>
                            <hr>
                            <div class="grid grid-cols-2 mb-4 mt-8 text-xl">
                                <p class="mb-0">Email</p>
                                <input class="text-gray-400 mb-0 bg-transparent" v-model="email" />
                            </div>
                            <hr>
                            <div class="grid grid-cols-2 mb-4 mt-8 text-xl">
                                <p class="mb-0">Phone</p>
                                <input class="text-gray-400 mb-0 bg-transparent" v-model="telephone" />
                            </div>
                            <hr>
                            
                            <div class="flex items-center mt-10 justify-center text-xl">
                            <button
                                class="bg-[#07693A] hover:bg-[#07693A] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="submit"
                                @click="updateUser()">
                                Envoyer
                            </button>
                            </div>
                        </form>
                        <p v-if="success">Profile updated successfully!</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
  <script>
    import UserProfileForm from '../../components/Forms/UserProfileForm.vue';
    import UserCard from '../../components/Forms/UserCard.vue';
    import {Api} from '../../helpers';
    import { ref } from "vue";


    export default {
      components: {
        UserProfileForm,
        UserCard
      },
      data() {
        return {
            user: {},
        
            profileImageURL:"",
            username:"",
            name:"",
            telephone:"",
            surname:"",
            email:"",
            success:false
        }

      },

      mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        this.user = user
        this.username = user.username,
        this.surname = user.surname,
        this.name = user.name,
        this.telephone = user.telephone,
        this.email = user.email,
        this.profileImageURL = user.image.url
      },

      methods:{
        updateUser(){
            Api.put('/authentication/api/auth/update-user',{
                codepays: "237",
                email: this.email,
                name: this.name,
                surname: this.surname,
                // telephone: this.telephone,
                username: this.username
                })
                .then(response => {
                    // mettre à jour le nombre de vues dans l'interface utilisateur
                    console.log(response.data);
                    localStorage.setItem('user',JSON.stringify(response.data));
                    this.success=true;

                    }).catch(function(error) {
                    console.log(error);
                })
            },

            onImageSelect(event){
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append('file', file)           
            Api.put('/authentication/api/auth/update-photo-user/{id}?username=' +this.user.username, formData)
            .then(response => {
                console.log(response);
                localStorage.setItem('user',JSON.stringify(response.data))
                location.reload()

            }).catch(function(error){
                console.log(error);
            })

        }
      }

    }
  </script>
  <style>

  </style>
  