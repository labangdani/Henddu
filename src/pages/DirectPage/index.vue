<template>
    <div class="bgc">
        <VideoLiveVue></VideoLiveVue>
    </div>
</template>

<script>
    import VideoLiveVue from '../../components/VideoLive.vue';
    export default{
        name:'DirectLive',
        components:{
            VideoLiveVue,
        },
        mounted: function () {
            console.log(this.$store.state.user)
            if (this.$store.state.user.id == -1){
                this.$router.push ('/')
            }
        }
    }
</script>
<style>
    .bgc{
        background-color: #121212;
    }
</style>