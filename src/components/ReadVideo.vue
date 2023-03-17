<template>
    <section class="">
        <div class="grid grid-cols-3 mt-20">
            <div class="col-span-2 pl-20 pr-10">
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject">
                    <video ref="videoPlayer" src="" controls style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" width="720" height="480"></video>
                </div>
                

                <div class="like-block">
                    <div :class="{colorGreen: likeOk === true}"  @click="likeVideo()">
                        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                        <span>{{likeTab.length}}</span>
                    </div>
                    <div>
                        <font-awesome-icon icon="fa-solid fa-message" />
                        <span>{{commentTab.length}}</span>
                    </div>
                    <div @click="favVideo()" :class="{colorGreen: favOk === true}">
                        <font-awesome-icon icon="fa-solid fa-bookmark" />
                        <!-- <span>{{favVideoTab.length}}</span> -->
                    </div>
                </div><br>
                <div class="title-video">{{ title }}</div><br>
                <div class="description-video">{{ description }}</div>
                <br><br>

                <form action="">
                    <div class="cadre-imput-comment">
                        <div class="input-comment">
                            <div class="input-group flex-nowrap">
                                <span class="camera" id="addon-wrapping"><font-awesome-icon icon="fa-solid fa-camera" /></span>
                                <input type="text" v-model="content_comment" class="form-control" placeholder="Type Comment" aria-label="Username" aria-describedby="addon-wrapping">
                            </div>
                        </div>
                        <div class="comment-button">
                            <button class="annuler">Annuler</button>
                            <button class="btn-order1 rounded-3 me-4" @click="insertComment()">Ajouter un commentaire</button>
                        </div>
                    </div>
                </form>

                <br><br>
                <!-- <p>{{description}}</p> -->
                <div class="commentaire mt-5" v-for="(comment, index) in commentTab.slice().reverse()" :key="index">
                    <div class="w-10 rounded-full">
                            <img src="/src/assets/images/profile.png" alt="">
                        <div>
                            <div class="name-commentaire">{{comment.user}}</div>
                            <div class="time-commentaire">{{ moment(comment.createdAt).fromNow() }}</div>
                        </div>
                    </div>
                    <div class="commentaire-text">{{ comment.content }}</div>
                    <!-- <div class="appreciation-commentaire">
                        <p>Like</p>
                        <p>Reply</p>
                    </div> -->
                </div>
            </div>


            <div class="pr-10 ">

                    <div class="" @click="reload" v-for="(videoSimilaire, index) in videoSimilaires" :key="index">
                        <router-link class="router-link" :to="'/ReadVideo/'+videoSimilaire.id">

                            <div >
                                <div class="col-md-4" style="max-height:150px;">
                                    <img :src="videoSimilaire.image" style="height:150px; width: 100%;" class="skeleton img-fluid rounded-start">
                                </div>
                                <div class="col-md-8" style="max-height:120px;">
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
import {Api} from '../helpers';
import moment from 'moment'

    moment.locale ('fr');
    export default{
        name:'ReadVideo',
        // props: ["video"],
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
                likeOk:false,
                favOk:false,
                title:'',
            }
        },
        methods:{
            reload(){
                location.reload()
            },
            insertComment() {
                let token  = localStorage.getItem("jwtToken");
                Api.post('/streamvod/rest/comments/create/' + this.$route.params.id,
                {content:this.content_comment}, 
                {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                    }
                })
                .then(function (response) {
                    console.log(response)
                    location.reload()
                    // self.$router.push('/ReadVideo/' + this.id)
                }).catch(function(error) {
                    console.log(error);
                })
            },
            likeVideo() {
                Api.put('/streamvod/rest/likes/' + this.$route.params.id,
                {content:this.content_comment})
                .then(function (response) {
                    console.log(response)
                    location.reload()
                }).catch(function(error) {
                    console.log(error);
                })
            },
            favVideo() {
                Api.put('/streamvod/rest/fav/' + this.$route.params.id,
                {content:this.content_comment})
                .then(function (response) {
                    console.log(response)
                    location.reload()
                }).catch(function(error) {
                    console.log(error);
                })
            },
            like(){
                if (this.likeTab.includes(this.$store.state.user.username)){
                    this.likeOk = true;
                }
            },
            fav(){
                if (this.favVideoTab.includes(this.$store.state.user.username)){
                    this.favOk = true;
                }
            },
        },
        
        async mounted(){
            
            console.log(this.$store.state.user)
            console.log(this.$store.state.user.username)
            
            if (this.$store.state.user.id == -1){
                this.$router.push ('/')
            }

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
            console.log(this.likeOk)
            console.log(this.favOk)
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
</style>