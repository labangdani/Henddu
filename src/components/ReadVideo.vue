<template>
    <section>
        <div class="grid grid-cols-3 mt-20">
            <div class="col-span-2 pl-20 pr-10">
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject">
                    <video class="w-full shadow-lg" ref="videoPlayer" autoplay loop controls muted></video>
                </div>

                <h1 class="py-2.5 text-2xl text-white">{{ title }}</h1>
                <div class="h-0 mb-2.5 border border-solid border-t-0 border-slate-800 opacity-25"></div>
                <div class="flex justify-between mb-2.5 px-2.5">
                    <div class="flex justify-center space-x-2" @click="likeVideo()"><svg class="h-6 w-6" :class="{colorGreen: islike === true }" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg><p>{{ likeTab.length }}</p></div>
                    <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg><p>{{ commentTab.length }}</p></div>
                    <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></div>
                    <div class="flex space-x-2" @click="favVideo()"><svg class="h-6 w-6" :class="{colorGreen: isfav === true }"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></div>
                </div>
                <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
                <div class="capitalize bg-gray-700 rounded-lg p-2.5">
                    <h2 class="text-sm text-gray-300">{{ views }} vues</h2>
                    <p class="text-md ">{{ description }}</p>
                </div>
                <!-- <br><br> -->

                <form class="mt-8">    
                    <div class="flex space-x-3 mb-4">
                        <img class="mb-0 h-10 w-10 rounded-full" :src=user.image.url />
                        <input type="text" class="text-white outline-none border-b-2 bg-transparent text-md block w-full py-1.5" placeholder="Ajouter un commentaire" v-model="content_comment" @input="checkForm" />
                    </div>
                    <div class="flex justify-end mb-4 space-x-4">
                        <button class="border-b-2">Annuler</button>
                        <button type="submit" class="bg-[#07693A] py-1.5 px-5 rounded-full disabled:bg-gray-700 disabled:cursor-not-allowed" :disabled="formIncomplete" @click="insertComment()">Ajouter un commentaire</button>
                    </div>
                </form>

                <div class="h-0 mb-7 border border-solid border-t-0 border-slate-800 opacity-25"></div>

                <div v-for="(comment, index) in commentTab.slice().reverse()" :key="index">
                    <div class="flex space-x-4 mb-7">
                        <img class="mb-0 h-10 w-10 rounded-full" :src=comment.user_photo />
                        <div>
                            <div class="flex space-x-4">
                                <h1 class="font-bold">@{{ comment.user }}</h1>
                                <p class="text-sm mt-1">{{ moment(comment.createdAt).fromNow() }}</p>
                            </div>
                            <p class="text-gray-400">{{comment.content}}</p>
                        </div>
                    </div>
                    <!-- <div class="flex space-x-4 mb-7">
                        <img class="mb-0 h-10 w-10 rounded-full" :src=user.image.url />
                        <div>
                            <h1 class="font-bold">@{{ user.username }}</h1>
                            <p class="text-gray-400">super</p>
                        </div>
                    </div> -->
                </div>
            </div>

            <div class="pr-10 ">
                <div class="mb-5" @click="reload" v-for="(videoSimilaire, index) in videoSimilaires" :key="index">
                    <router-link class="router-link" :to="'/ReadVideo/'+videoSimilaire.id">
                        <div class="grid grid-cols-3">
                            <div class="mr-4">
                                <img :src="videoSimilaire.image.url" class="rounded-xl w-40 h-32">
                                <!-- <Image
                                :src="videoSimilaire.image.url"
                                :size="185"
                                class="rounded-xl"
                                /> -->
                            </div>
                            <div class="col-span-2">
                                <div class="card-body">
                                    <h6 class="card-title"><strong>{{ videoSimilaire.title }}</strong></h6>
                                    <p class="smoll-text card-text">{{ videoSimilaire.description }}</p>
                                    <p class=""><small class="text-muted">{{ videoSimilaire.years }}</small></p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>  
        </div>
    </section>
</template>

<script>
    import { ref } from "vue";
    import {Api} from '../helpers';
    import moment from 'moment';
    import Image from "./Image.vue";
    moment.locale ('fr');
    
    export default{
        name:'ReadVideo',
        components:{
            Image,
        },

        data(){
            return{
                video: [],
                videoSimilaires: [],
                description: '',
                content_comment:'',
                commentTab:[],
                moment:moment,
                likeTab:[],
                favVideoTab:[],
                views:'',
                title:'',
                islike:false,
                isfav:false,
                user:{
                name:'',
                image:{
                url:''
                },
                username:'',
                surname:'',
                telephone:'',
                email:'',
            }
            }
        },

        computed: {
            formIncomplete() {
            return !(this.content_comment);
            },
        },

        setup() {
            const container = ref(null);
            return {
                container,
            };
        },

        methods:{
            // reload(){
            //     location.reload()
            // },

            insertComment() {
                Api.post('/streamvod/rest/comments/create/' + this.$route.params.id,
                {content:this.content_comment})
                .then( response => {
                    console.log(response.data.content);
                    this.commentTab.push(response.data.content.content); 
                    location.reload();
                }).catch(function(error) {
                    console.log(error);
                })

            },

            likeVideo() {
                Api.put('/streamvod/rest/likes/' + this.$route.params.id)
                .then(response => {
                    // mettre à jour le nombre de vues dans l'interface utilisateur
                    console.log(response.data.content.likedUsers);
                    this.likeTab = response.data.content.likedUsers;
                   this.like()

                    }).catch(function(error) {
                    console.log(error);
                })
            },

            favVideo() {
                Api.put('/streamvod/rest/fav/' + this.$route.params.id)
                .then(response => {
                    // mettre à jour le nombre de vues dans l'interface utilisateur
                    console.log(response.data.content.favUsers);
                    this.favVideoTab = response.data.content.favUsers;
                    this.fav()
                    }).catch(function(error) {
                    console.log(error);
                })
            },

            like(){
                if (this.likeTab.includes(this.$store.state.user.username)){
                    this.islike = true;
                    }
                else{
                    this.islike = false;
                }  
            },

            fav(){
                if (this.favVideoTab.includes(this.$store.state.user.username)){
                    this.isfav = true;
                    }
                else{
                    this.isfav = false;
                }
            },

            formatNumber(number) {
                if (number >= 1000000000) {
                    return (number / 1000000000).toFixed(1) + ' Milliards';
                } else if (number >= 1000000) {
                    return (number / 1000000).toFixed(1) + ' millions';
                } else if (number >= 1000) {
                    return (number / 1000).toFixed(1) + ' milliers';
                } else {
                    return number.toString();
                }
            },

            incrementViews() {
                // appel à l'API pour incrémenter le nombre de vues
                Api.put('/streamvod/rest/videos/update-vue/' + this.$route.params.id)
                    .then(response => {
                    // mettre à jour le nombre de vues dans l'interface utilisateur
                    // console.log(response.data.content.nbVues);
                    this.views = this.formatNumber(response.data.content.nbVues)
                        console.log(this.views)
                    
                    })
                    .catch(error => {
                    console.log(error);
                    });
            },

            checkForm() {
                this.$nextTick(() => {
                    this.formIncomplete = !(this.content_comment);
                });
            },

        },
        
        async mounted(){
            this.user = JSON.parse(localStorage.getItem('user'));

            //*********** VIDEOS EN LECTURE ***************

            this.id = this.$route.params.id
            console.log(this.id)

            const result = await Api.get('/streamvod/rest/videos/'+this.$route.params.id)
            this.video=result.data.content
            console.log(this.video)
            this.$refs.videoPlayer.src = this.video.url
            console.log(this.$refs.videoPlayer.src)

            this.description = this.video.description
            this.title = this.video.title
            this.likeTab = this.video.likedUsers
            this.commentTab = this.video.comments
            this.favVideoTab = this.video.favUsers
            console.log(this.commentTab)
            console.log(this.likeTab)
            console.log(this.favVideoTab)


            //*********** VIDEOS SIMILAIRES ***************

            const result1 = await Api.get('/streamvod//rest/videos/' + this.$route.params.id + '/videos-similaire')

            this.videoSimilaires = result1.data.content
            console.log(this.videoSimilaires)

            //*********** BLOCK DES COMMENTAIRES ***************

            this.like();
            this.fav();

            this.incrementViews()
        },
    }

</script>

<style>
    .pd-10{
        padding: 20px;
    }
    .smoll-text{
        font-size: 14px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .mb-3{
        transition: all 0.5s ease;
    }
    .mb-3:hover{
        transform: scale(1.1);
      z-index: 99;
    }
    .input-comment{
        width: 100%;
    }
    .annuler{
        background-color: transparent;
        border: none;
        width: 140px;
        height: 50px;
        border-bottom: 2px white solid;
        color: white;
        font-weight: bold;
        transition: all 0.5s ease;
        margin-right: 20px;
    }
    .annuler:hover{
        transform: scale(1.1);
    }
    .comment-button{
        margin-top: 20px;
        float: right;
    }
    .colorGreen{
        color: #07693A; 
    }
    .text-white .router-link{
        color: white;
        text-decoration: none;
    }
    .title-video{
        font-weight: bold;
        text-transform: capitalize;
        color: white;
    }
    .description-video{
        text-transform: capitalize;
        color: white;
        padding-right: 10px;
    }

    
.shadow {
  -webkit-box-shadow: 0px 0px 12px 0px #000000;
  box-shadow: 0px 0px 12px 0px #000000;
}

/* .commentclass{
    @apply bg-[#07693A] p-2.5 rounded-2xl;
} */

.video-card img {
  @apply object-cover rounded-md absolute top-0 left-0 w-full h-full;
}

.submit-button:disabled {
    cursor: not-allowed;
    background-color: #D1D5DB;
    color: #111827;
}

.submit-button:disabled:hover {
    background-color: #9CA3AF;
}

</style>