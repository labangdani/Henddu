<template>
    <div class="grid grid-cols-3 mt-20">
        <div class="col-span-2 pl-20 pr-10">
            <div class="col-md-7">
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject">
                    <meta itemprop="name" content="du divertissement explosif !!!"/>
                    <meta itemprop="uploadDate" content="2020-07-28T21:03:12.000Z"/>
                    <meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/l/SMzgY1ZSZrI118-qE/x240"/>
                    <meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x7v9nKy"/>
                    <iframe src="https://www.dailymotion.com/embed/video/x7v9nKy?autoplay=1" frameborder="0" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" width="720" height="480" allowfullscreen allow="autoplay" type="text/html"></iframe>
                </div>
            </div>
        </div>

        <div class="pr-10">
            <div class=" block-commentaire col-md-5">
                <!-- <div class="cadre-commentaire"> 
                    <div class="commentaire">
                        <div class="user-commentaire">
                            <img src="/src/assets/images/profile.png" alt="">
                            <div>
                                <div class="name-commentaire">Albert Doonkey</div>
                                <div class="time-commentaire">1h</div>
                            </div>
                        </div>
                        <div class="commentaire-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.</div>
                        <div class="appreciation-commentaire">
                            <p>Like</p>
                            <p>Reply</p>
                        </div>
                    </div>

                    <div class="commentaire">
                        <div class="user-commentaire">
                            <img src="/src/assets/images/profile.png" alt="">
                            <div>
                                <div class="name-commentaire">Maria Lebanov</div>
                                <div class="time-commentaire">1h</div>
                            </div>
                        </div>
                        <div class="commentaire-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.</div>
                        <div class="appreciation-commentaire">
                            <p>Like</p>
                            <p>Reply</p>
                        </div>
                    </div>

                    <div class="commentaire">
                        <div class="user-commentaire">
                            <img src="/src/assets/images/profile.png" alt="">
                            <div>
                                <div class="name-commentaire">Albert Doonkey</div>
                                <div class="time-commentaire">1h</div>
                            </div>
                        </div>
                        <div class="commentaire-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.</div>
                        <div class="appreciation-commentaire">
                            <p>Like</p>
                            <p>Reply</p>
                        </div>
                    </div>

                    <div class="commentaire">
                        <div class="user-commentaire">
                            <img src="/src/assets/images/profile.png" alt="">
                            <div>
                                <div class="name-commentaire">Mark Marquez</div>
                                <div class="time-commentaire">1h</div>
                            </div>
                        </div>
                        <div class="commentaire-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.</div>
                        <div class="appreciation-commentaire">
                            <p>Like</p>
                            <p>Reply</p>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div>
                        <img src="/src/assets/images/profile.png" alt="Image de profile" ref="btnDropdownRef" class="w-10 shadow-lg border-1 ml-2 mt-4 border-white rounded-full" >
                    </div>
                    <div class="mt-6 w-full">
                        <input type="text" id="typeText" placeholder="commentaires" class="pt-1 pl-1 w-full bg-black outline-none border-b-2" />
                    </div>                  
                </div> -->
            </div>
        </div>
    </div>

    <div class="video pt-10">
        <!-- <div class="flex items-center space-x-2">
            <circle-button class="p-1">
                <IconThumbUp class="text-xs" />
            </circle-button>
            <circle-button class="p-1">
                <IconThumbDown class="text-xs" />
            </circle-button>
        </div> -->
        <LiveCardVue></LiveCardVue>
    </div>
</template>

<script>
    import LiveCardVue from '../components/LiveCard.vue';
    import IconThumbUp from "~icons/fluent/thumb-like-20-regular";
    import IconThumbDown from "~icons/fluent/thumb-dislike-24-regular";
    import CircleButton from "./CircleButton.vue";

    export default{
        name:'VideoLive',
        components:{
            LiveCardVue,
            IconThumbUp,
            IconThumbDown,
            CircleButton,
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
</style>