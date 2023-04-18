<template>
   <div class="w-full ">
        <div class="grid grid-cols-3 space-x-6">
            <div class="grid grid-rows-2 shadow">
                <img :src="profileImageURL" class="rounded-t-lg" alt="Image de profil">
                <div class="max-h-[60%] bg-white rounded-b-lg">
                    <div class="flex justify-center -mt-10">
                        <img :src="profileImageURL" class="w-28 border-4  h-28 mb-4 rounded-full" alt="Image de profil">
                        <form>
                            <input ref="imageprofile" class="hidden" type="file" accept="image/jpeg, image/png" @change="onImageSelect">
                            <svg class="h-6 w-6 text-black mt-20" type="file" @click="callref" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                            </svg>
                        </form>
                    </div>  
                    <p class="text-black body flex justify-center font-bold mt-5 capitalize text-xl">{{ username }}</p> 
                    <p class="text-gray-300 body flex justify-center capitalize text-sm">@{{ username }}</p> 
                </div>
            </div>

            <div class="max-h-[80%] col-span-2 bg-white p-10 shadow rounded-lg">
                                      
                <h1 class="lg:text-3xl lg:mb-8 text-black text-xl font-light text-center mt-0 mb-6">Mes informations personnelles</h1>
                <form class="mt-8">
                    <div class="grid grid-cols-2 space-x-4"> 
                        <div class=" mt-8 space-y-2 text-lg">
                            <label class="mb-0 text-gray-500">Nom utilisateur</label>
                            <div>
                                <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" v-model="username" />
                            </div>
                        </div>
                        <div class="mt-8 space-y-2 text-lg">
                            <label class="mb-0 text-gray-500">Phone</label>
                            <div> 
                                <!-- <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="tel" v-model="telephone" /> -->
                                <vue-tel-input v-model="tel" :value="user.telephone" :default-country="'CM'" class="text-black bg-gray-300 p-0.5 rounded-lg mb-0 w-full" ref="phoneInput"></vue-tel-input>
                                
                            </div>
                        </div>
                    </div>
                    

                    <div class="grid grid-cols-2 space-x-4"> 
                        <div class="mt-8 space-y-2 text-lg">
                            <label class="mb-0 text-gray-500"> Nom</label>
                            <div> 
                                <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" v-model="name" />
                            </div>
                        </div>
                        <div class="mt-8 space-y-2 text-lg">
                            <label class="mb-0 text-gray-500">Prenom</label>
                            <div> 
                                <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" v-model="surname" />
                            </div>
                        </div>
                    </div>
                   
                    <div class="mb-4 mt-8 space-y-2 text-lg">
                        <label class="mb-0 text-gray-500">Email</label>
                        <div> 
                            <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="email" v-model="email" />
                        </div>
                    </div>
                    
                    <div class="flex items-center mt-10 justify-center text-lg">
                        <button
                            class="bg-[#07693A] hover:bg-[#07693A] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                            @click="updateUser()">
                            Envoyer
                        </button>
                    </div>
                </form>
                <p class=" flex text-black justify-center" v-if="success">Profile updated successfully!</p>
            </div>
        </div>

        <div class="col-span-2 bg-white p-10 shadow rounded-lg">
                                      
            <h1 class="lg:text-3xl lg:mb-8 text-black text-xl font-light text-center mt-0 mb-6">Modifier mon mot de passe</h1>
            <form class="mt-8">
                
                <div class="mb-4 mt-8 hidden space-y-2 text-lg">
                    <label class="mb-0 text-gray-500">username</label>
                    <div> 
                        <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="password" v-model="username" />
                    </div>
                </div>
                <div class="mb-4 mt-8 space-y-2 text-lg">
                    <label class="mb-0 text-gray-500">Ancien mot de passe</label>
                    <div> 
                        <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="password" v-model="oldPassword" />
                    </div>
                </div>
                <div class="mb-4 mt-8 space-y-2 text-lg">
                    <label class="mb-0 text-gray-500">Nouveau mot de passe</label>
                    <div> 
                        <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="password" v-model="newPassword" />
                    </div>
                </div>
               <!-- <div class="mb-4 mt-8 space-y-2 text-lg">
                    <label class="mb-0 text-gray-500">confirmer le nouveau mot de passe</label>
                    <div> 
                        <input class="text-black bg-gray-300 p-2.5 rounded-lg mb-0 w-full" type="password" v-model="password" />
                    </div>
                </div>  -->
                
                <div class="flex items-center mt-10 justify-center text-lg">
                    <button
                        class="bg-[#07693A] hover:bg-[#07693A] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="submit"
                        @click="updatePassword()">
                        Envoyer
                    </button>
                </div>
            </form>
            <p class=" flex text-black justify-center" v-if="successpwd">Password updated successfully!</p>
        </div>


        
    </div>
</template>

<script>
    import {Api} from '../../helpers';
    import { ref } from "vue";


    export default {
      components: {
      },

      data() {
        return {
            user: {},
            ok:'',
            profileImageURL:"",
            username:"",
            name:"",
            tel:"",
            surname:"",
            email:"",
            success:false,
            successpwd:false,
            newPassword:"",
            oldPassword:""
        }
      },

      mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        this.user = user
        this.username = user.username,
        this.surname = user.surname,
        this.name = user.name,
        this.email = user.email,
        this.profileImageURL = user.image.url
        if(user.telephone == null){
            this.tel = ""
        }
        else{
            this.tel = user.telephone
        }

      },

      methods:{
        updateUser(){
            console.log(tel)

            Api.put('/authentication/api/auth/update-user',{
                codepays:"237",           
                email: this.email,
                name: this.name,
                surname: this.surname,
                telephone: this.tel,
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

            updatePassword(){
                Api.put('/authentication/api/auth/changePassword',{
                    oldPassword: this.oldPassword,
                    newPassword:this.newPassword,
                    username:this.username
                    })
                    .then(response => {
                        // mettre à jour le nombre de vues dans l'interface utilisateur
                        console.log(response.data);
                        localStorage.setItem('user',JSON.stringify(response.data));
                        this.successpwd=true;

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

        },

        callref(){
            this.$refs.imageprofile.click()
        }
      }

    }
</script>


<style>

</style>
 