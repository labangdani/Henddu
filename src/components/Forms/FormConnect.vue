<template>
    <div class="bl">
      <div class="wrapper1">
      <section class="form signup">
        <header><div class="img"></div></header>
        <form >
          <div class="text1">Rejoignez nous et bénéficiez de plus d'avantages. Nous promettons de conserver vos données en toute sécurité.</div>
          <div  class="text1" v-if="status === 'error_login'" >
            <strong>Username ou Mot de passe ivalide</strong>
          </div>
          <div  class="propsition">
            <div :class="{layour: connect === 'Email' || connect === ''}">
              <button @click=" connectToEmail"><strong>Email</strong></button>
            </div>
            <div :class="{layour: connect === 'Phone'}">
              <button @click="connectToPhone"><strong>Telephone</strong></button>
            </div>
            <div :class="{layour: connect === 'Username'}">
              <button @click="connectToUsername"><strong>Username</strong></button>
            </div>
          </div> 
          <div  class="text1" v-if="message != ''" >
            <strong>{{message}}</strong>
          </div>
              <transition-group mode="out-in" name="fade">
                <div class="field input" v-if="connect === 'Email' || connect === ''">
                  <input v-model="email" type="email" name="" id="" placeholder="Email" >
                </div>
                <div class="field input" v-if="connect === 'Username'">
                  <input v-model="username" type="text" name="" id="" placeholder="Nom d'utilisateur" >
                </div>
                <div class="field input" v-if="connect === 'Phone'">
                  <!-- <input v-model="username" type="text" name="" id="" placeholder="Numero de tel..." > -->
                  <vue-tel-input v-model="phone" class="tel-input" ></vue-tel-input>
                </div>
              </transition-group>
              
              <div class="field input">
                <input v-model="password" :type="show === true ? 'text' : 'password' " name="" id="" placeholder="Mot de passe">
                <span class="eye" @click="maskPassword" v-if="show ===true "><font-awesome-icon icon="fa-solid fa-eye"/></span>
                <span class="eyes" @click="showPassword" v-if="show == false "><font-awesome-icon icon="fa-solid fa-eye-slash" /></span>
              </div>
              
            <div class="mdp_oublie"><router-link to="/FormForgetPassword">Mot de passe oublié ?</router-link></div>
            <div class="field button">
              <!-- <button  >
                <span v-if="status == 'loading'">Connexion en cours ...</span>
                <span v-else></span>
              </button> -->
              <input @click="login()" type="submit" value="Connectez-vous maintenant" >
            </div>
        </form>
        <div class="link">Vous n'avez pas de compte ? <router-link to="/signin" class="condition">S'inscrire</router-link></div>
      </section>
    </div>
    </div>
  </template>
  
  <script>
  import { mapState} from 'vuex'

  export default {
    name: 'signin',
     data(){
      return{
        message:'',
        username:'',
        email:'',
        phone:'',
        password:'',
        show:false,
        connect:'',
      }
    },
   
    computed:{
      ...mapState(['status'])
    },

    methods:{
      connectToEmail(){
        this.connect = 'Email'
      },
      connectToPhone(){
        this.connect = 'Phone'
      },
      connectToUsername(){
        this.connect = 'Username'
      },

      showPassword(){
        this.show=true;
      },
      maskPassword(){
        this.show=false;
      },

       login() {

        if (this.connect === "Email" || this.connect === ""){
          if (this.email == '' || this.password == ''){
            this.message = 'Veuillez remplir tous les champs'
          }else{
            this.message = ''
            const self = this;
              this.$store.dispatch('loginToEmail', {
                email:this.email,
                password:this.password
            })
              .then(function(response){
                self.$router.push('/')
                console.log(response)
                console.log(this.$store.state.status)
              })
              .catch(function(error) {
                console.log(error)
              })
          }
        }

        if (this.connect === "Phone"){
          if (this.phone == '' || this.password == ''){
            this.message = 'Veuillez remplir tous les champs'
          }else{
            this.message = ''
            const self = this;
              this.$store.dispatch('loginToPhone', {
                phone:this.phone,
                password:this.password
            })
              .then(function(response){
                self.$router.push('/')
                console.log(response)
                console.log(this.$store.state.status)
              })
              .catch(function(error) {
                console.log(error)
              })
          }
        }
        
        if (this.connect === "Username"){
          if (this.username == '' || this.password == ''){
            this.message = 'Veuillez remplir tous les champs'
          }else{
            this.message = ''
            const self = this;
              this.$store.dispatch('loginToUsername', {
                username:this.username,
                password:this.password
            })
              .then(function(response){
                self.$router.push('/')
                console.log(response)
                console.log(this.$store.state.status)
              })
              .catch(function(error) {
                console.log(error)
              })
          }
        }
      }
    },
    
  }
  </script>
  
 <style>
  .fade-enter-from{
    opacity: 0;
    transform: scale(0.5);
  }
  .fade-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  .fade-enter-active{
    transition: all 1s ease-in-out;
  }
  .fade-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .fade-leave-to{
    opacity: 0;
    transform: scale(0.5);
  }
  .fade-leave-active{
    transition: all 1s ease-in-out;
  }
    .propsition{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }
    .propsition div{
      text-align: center;
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
    }
    .layour{
      font-size: 1.2em;
      border: 0px;
      border-bottom: #07693A 3px solid;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .propsition button{
      width: 100%;
      border: none;
      background-color: transparent;
      color: white;
      transition:all 0.3s  ease;
      margin-bottom: 10px;
    }

    .eye{
      color: white;
      position: relative;
      bottom: 30px;
      left: 99%;
      width: 10px;
      height: 1px;
    }
    .eyes{
      color: #acabab;
      position: relative;
      bottom: 30px;
      left: 99%;
      width: 10px;
      height: 1px;
    }
    .bl{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 50px;
      height: 100vh;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/bg.jpeg')right top no-repeat;
      background-size: cover;
    }
    .wrapper1{
      background: #121212;
      max-width: 400px;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form{
      padding: 25px 30px;
    }
  
    .form header{
      display: flex;
      align-items: center;
      justify-content: center;
      height:30px;
    }
    .img{
      height: 50px;
      width: 80px;
      background: url('/src/assets/images/whitelogo.png')center center no-repeat;
      background-size: cover;
      border-radius: 20px;
    }
  
    .form form{
      margin: 20px 0;
    }
    .form form .text1{
      color: #c0bdbd;
      padding-top: 20px;
      margin-bottom: 5px;
      text-align: center;
    }
    .form form .field{
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }
    .form form .field input{
      outline: none;
    }
    .form form .input input{
      height: 40px;
      font-size: 16px;
      padding: 0 15px;
      border: none;
      border-radius: 10px;
      background-color: #333;
      color: white;
    }
    .form form .input .tel-input{
      height: 40px;
      font-size: 16px;
      padding: 0 15px;
      border: none;
      border-radius: 10px;
      background-color: #333;
      outline: none;
      @apply mb-2.5;
    }
    .form form .radio{
      display: inline-block;
    }
    .form form .radio .checkbox{
      margin: 10px;
      height: 15px;
      width: 15px;
      background: #121212;
    }
    .form form .button input{
      margin-right: 13px;
      background-color: #07693A;
      border: none;
      width: 100%;
      height: 40px;
      color: #c0bdbd;
      font-weight: 650;
      border-radius: 17px;
      cursor: pointer;
    }
    .link{
      text-align: center;
      color: #c0bdbd;
      font-weight: 400;
    }
    .link .condition{
      color: #34A662;
      text-decoration: none;
    }
    .link a:hover{
      text-decoration: underline;
    }
    .mdp_oublie{
        text-align: center;
        margin-top: 0;
        margin-bottom: 20px;
    }
    .mdp_oublie a{
        color: #c0bdbd;
    }
  </style>