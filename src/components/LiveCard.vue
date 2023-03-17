<template>
    <div class="block-chaine">
      <div class="program">
        <div class="devant">
          <div class="img-direct">
            <img src="/src/assets/images/ccomment.jpeg" alt="">
          </div>
          <div class="chaine-logo">
            <img src="/src/assets/images/canal2Int.png" alt="">
            <p>C' Comment</p>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>

      <div class="program">
        <div class="devant">
          <div class="img-direct">
            <img src="/src/assets/images/ccomment.jpeg" alt="">
          </div>
          <div class="chaine-logo">
            <img src="/src/assets/images/logecdmovie.png" alt="">
            <p>C' Comment</p>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>

      <div class="program">
        <div class="devant">
          <div class="img-direct">
            <img src="/src/assets/images/ccomment.jpeg" alt="">
          </div>
          <div class="chaine-logo">
            <img src="/src/assets/images/logocdinfo.png" alt="">
            <p>C' Comment</p>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>

      <div class="program">
        <div class="devant">
          <div class="img-direct">
            <img src="/src/assets/images/ccomment.jpeg" alt="">
          </div>
          <div class="chaine-logo">
            <img src="/src/assets/images/c2E.jpg" alt="">
            <p>C' Comment</p>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>

      <div class="program">
        <div class="devant">
          <div class="img-direct">
            <img src="/src/assets/images/ccomment.jpeg" alt="">
          </div>
          <div class="chaine-logo">
            <img src="/src/assets/images/canal2_movies_logo_670.jpg" alt="">
            <p>C' Comment</p>
          </div>
        </div>
        <div class="bg-white"></div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'LiveCard',
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
  .bg-white{
    background-color: #fff;
    height: 130px;
    width: 220px;
    margin-bottom: 20px;
    position: relative;
    bottom: 130px;
    right: 10px;
    border-radius: 0 0 20px 20px;
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
    margin-top: 20px;
    display: flex;
    position: relative;
    bottom: 7px;
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