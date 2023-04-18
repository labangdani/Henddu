<template>
    <div class="grid grid-cols-3 mt-20">
        <div class="col-span-2 pl-20 pr-10">
            <div class="col-md-7">
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject">
                    <meta itemprop="name" content="du divertissement explosif !!!"/>
                    <meta itemprop="uploadDate" content="2020-07-28T21:03:12.000Z"/>
                    <meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/l/SMzgY1ZSZrI118-qE/x240"/>
                    <meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x7v9nKy"/>
                    <iframe frameborder="0" ref="livePlayer" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" width="720" height="480" allowfullscreen allow="autoplay" type="text/html"></iframe>
                </div>
            </div>

            <div class="">
                <ul class="flex space-x-4 mt-4 text-md font-bold">
                    <li @click="get_menu()">
                        En direct
                    </li>
                    <li @click="get_menu()">
                        A suivre
                    </li>
                </ul> 
            </div>
            <!-- <h1 class="py-2.5 text-2xl text-white">{{ video.title }}</h1>
            <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
            <div class="flex justify-between mb-4">
                <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg><p>bonjour</p></div>
                <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg><p>bonjour</p></div>
                <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg><p>bonjour</p></div>
                <div class="flex space-x-2"><svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg><p>bonjour</p></div>
            </div>
            <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
            <div class="text-lg capitalize bg-gray-700 rounded-lg p-2.5">{{ video.description }}</div> -->
        </div>

        <!-- <div class="pr-10">
            <div class=" block-commentaire col-md-5">
                
            </div>
        </div> -->
    </div>

    <div class="video pt-10 px-20">
        <LiveCardVue></LiveCardVue>
    </div>
</template>

<script>
    import LiveCardVue from '../components/LiveCard.vue';
    import IconThumbUp from "~icons/fluent/thumb-like-20-regular";
    import IconThumbDown from "~icons/fluent/thumb-dislike-24-regular";
    import CircleButton from "./CircleButton.vue";
    import {Api} from '../helpers';
    import { ref } from "vue";



    export default{
        name:'VideoLive',
        
        data(){
            return{
                video:'',
                planif:'',
                channel:[]
            }
        },

        components:{
            LiveCardVue,
            IconThumbUp,
            IconThumbDown,
            CircleButton,
        },

        async mounted(){
            this.planif_id = this.$route.params.id;
            if(this.planif_id !== ''){
                this.watchvideo(this.planif_id);
            }
            else{
                Api.get('/streamvod/rest/planification/all')
                    .then((response) => {
                        this.planif = response.data.content
                        this.planif.forEach(item =>{
                            if(item.channels.channel_name=="Canal 2 international"){
                                this.planif_id == item.channels.id
                            }})

                this.watchvideo(14)                 
                })
            }
        },


        methods:{

            async watchvideo(planif_id){
                const response = await Api.get('/streamvod/rest/planification/{id}?id='+planif_id)
                this.channel=response.data.content
                this.channel.forEach(item => {
                console.log(item.channel_url)
                this.$refs.livePlayer.src = item.channel_url
                })        
            },

            get_menu(){
                this.menu = 'Programm';
            },
        }    
    }

</script>

<style>
    .commentaire{
        margin-left: 10px;
    }
    .section{
        width: 99%;
    }
    .appreciation-commentaire p{
        margin-right: 10px;
    }
   .block-commentaire{
    height: 480px;
    padding-top: 10px;
    background-color: #121212;
   }
   .cadre-commentaire{
    height: 85%;
    overflow: auto;
   }
   .cadre-commentaire::-webkit-scrollbar{
    width: 5px;
    border-radius: 5px;
    margin-right: 10px;
   }
   .cadre-commentaire::-webkit-scrollbar-track{
    background-color: #aaa7a7;
    border-radius: 5px;
   }
   .cadre-commentaire::-webkit-scrollbar-thumb{
    background-color: #fff;
    border-radius: 5px;
   }
   .user-commentaire{
    display: flex;
    margin-bottom: 10px;
   }
   .user-commentaire img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
   }
   .name-commentaire{
    color: #07693A;
    font-weight: bold;
   }
   .time-commentaire{
    font-size: 0.7em;
    color: #fff;
   }
   .commentaire-text{
    margin-left: 40px;
    /* color: #fff; */
   }
   .appreciation-commentaire{
    display: flex;
    color: #c0bdbd;
    font-size: 13px;
   }
   .commentaire{
    border-bottom: 1px solid #292828;
    margin-bottom: 10px;
   }
   .cadre-imput{
    display: flex;
    padding-top: 15px;
   }
   
   .camera{
    color: #07693A;
    font-size: 1.4em;
    display: block;
    height: 38px;
    width: 50px;
    background-color: #fff;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
   }
   .send{
    color: #07693A;
    font-size: 1.4em;
    height: 38px;
    width: 50px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
   }
   .like-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;
    border-bottom: #292828 solid 1px;
    color: #c0bdbd;
    border-top: #292828 solid 1px;
   }
   .like-block div span{
    margin-left: 8px;
   }
   .like-block div{
    transition: all 0.7s ease;
    cursor: pointer;
   }
   .like-block div:hover {
    transform: scale(1.2);
   }
   .menuclass{
      @apply inline-block focus:text-gray-300 focus:border-gray-300 border-b-4 text-lg font-netflix_medium transition duration-300 font-bold;
    }
</style>