<template>
  
    <div class="">
      <div class="program" v-for="(planification, index) in listplanifications" :key="index">
        <router-link :to="'/direct/' + planification.id"> 
          <div class="devant" >
            <div class="img-direct">
              <img :src=planification.programme.image.url alt="" />
            </div>
            <div v-for="(channel, index) in planification.channels" :key="index">
              <div class="flex justify-center mt-2"> 
                <img class="h-18 w-24" :src=channel.channel_logo.url alt="" />
              </div>
              <div> 
                <p class="text-white text-md mt-2 font-bold text-center">{{channel.channel_name}}</p>
              </div>
            </div>
          </div>
        </router-link>
        <!-- <div class="bg-white h-36 w-56 mb-10 relative bottom-32 right-2.5 rounded-tr-none rounded-b-3xl"></div> -->
      </div>
    </div>
</template>
<script>

import {Api} from '../helpers';

export default {
  name: 'LiveCard',

  data(){
    return{
     planif:[],
     listplanifications:[]
    }
  },

  mounted(){
    this.get_planning()
  },

  methods:{

    get_planning(){
      let now = new Date()
      Api.get('/streamvod/rest/planification/all')
      .then((response) => {
        this.planif = response.data.content
        this.planif.forEach(item =>{
          const startDateWithoutTime = new Date(new Date(item.startDate).getFullYear(), new Date(item.startDate).getMonth(), new Date(item.startDate).getDate());
          const endDateWithoutTime = new Date(new Date(item.endDate).getFullYear(), new Date(item.endDate).getMonth(), new Date(item.endDate).getDate());
          const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          if(startDateWithoutTime <= nowWithoutTime && nowWithoutTime <= endDateWithoutTime){
            if(new Date(item.endDate) >= now){
              this.listplanifications.push(item)
            }
          }
        })
        console.log(this.listplanifications) 
      })
    },
  }

}
</script>

<style>

  .image{
    display: block;
    height: 220px;
    width: 100%;
    transition: all 1s ease;
  }
  .image h1{
    color: white;
  }
  .image img{
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
  .imag{
    height: 30px;
    width: 80px;border-radius: 0px;
    margin-top: 10px;
    border-radius: 5px;
    
  }
  .devant{
    height: 250px;
    position: relative;
    z-index: 1000;
  }
  .block-live{
    display: flex;
    align-items: center;
    /* margin-bottom: 40px; */
  }
  .block-chaine{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 21%;
    gap: var(--size-3);
    overflow: auto;
    scroll-behavior: none; 
    width: 100%;
  }
  .block-chaine::-webkit-scrollbar{
    width: 0;
  }
 
  .program{
    height: 300px;
    width: 200px;
    margin: 20px;
    border-radius: 10px;
  }
  .img-direct{
    height: 80%;
    width: 100%;
  }
  .img-direct img{
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  .chaine-logo{
    margin-top: 5px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
  }
  .chaine-logo img{
    height: 30px;
    width: 60px;
    border-radius: 7px;
  }
  .chaine-logo p{
    margin-left: 10px;
    margin-top: 7px;
    font-weight: bold;
  }
</style>