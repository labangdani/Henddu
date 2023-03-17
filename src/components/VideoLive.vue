<template>
    <section class="">
        <div>
            <div class="row">
                <div class="col-md-7">
                    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject">
                        <meta itemprop="name" content="du divertissement explosif !!!"/>
                        <meta itemprop="uploadDate" content="2020-07-28T21:03:12.000Z"/>
                        <meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/l/SMzgY1ZSZrI118-qE/x240"/>
                        <meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x7v9nKy"/>
                        <iframe src="https://www.dailymotion.com/embed/video/x7v9nKy?autoplay=1" frameborder="0" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" width="720" height="480" allowfullscreen allow="autoplay" type="text/html"></iframe>
                    </div>

                    <div class="like-block">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                            <span>120k</span>
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-message" />
                            <span>120k</span>
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-bookmark" />
                            <span>120k</span>
                        </div>
                    </div>
                </div>
                <div class=" block-commentaire col-md-5">
                    <div class="cadre-commentaire">
                        
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
                    <div class="cadre-imput">
                        <div class="input">
                            <div class="input-group flex-nowrap">
                                <span class="camera" id="addon-wrapping"><font-awesome-icon icon="fa-solid fa-camera" /></span>
                                <input type="text" class="form-control" placeholder="Type Comment" aria-label="Username" aria-describedby="addon-wrapping">
                            </div>
                        </div>
                        <div class="send"><font-awesome-icon icon="fa-solid fa-arrow-right" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section><br>
    <div class="video">
        <LiveCardVue></LiveCardVue>
    </div>
</template>
<script>
    import LiveCardVue from '../components/LiveCard.vue'
    export default{
        name:'VideoLive',
        components:{
            LiveCardVue,
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
    color: #fff;
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
   .input{
    width: 90%;
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