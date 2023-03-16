<template>
  <div class="bl">
    <div class="wrapper">
    <section class="form signup">
      <header><div class="img"></div></header>
      <form>
        <div class="error-text">Créer un nouveau compte</div>
          <div class="text1" v-if="message_error != ''">
            <strong >{{message_error}} </strong>
          </div>
          <div  class="text1" v-if="status === 'error_create'" >
            <strong>Username ou Adresse Mail deja utilisé</strong>
          </div>


          <div  class="propsition">
            <div :class="{layour: connect === 'Email' || connect === ''}">
              <button @click=" connectToEmail"><strong>Email</strong></button>
            </div>
            <div :class="{layour: connect === 'Phone'}">
              <button @click="connectToPhone"><strong>Telephone</strong></button>
            </div>
          </div> 


        <div class="name-details">
          <div class="field input">
            <input v-model="last_name" type="text" class="ip" placeholder="Prénom">
          </div>
          <div class="field input">
            <input v-model="first_name" type="text" class="ip1" placeholder="Nom">
          </div>
        </div>
          <div class="field input">
            <input v-model="username" type="text" placeholder="Nom d'utilisateur">
          </div>
          <transition-group mode="out-in" name="fade">
            <div class="field input" v-if="connect === 'Email' || connect === ''">
              <input v-model="email" type="email" name="" id="" placeholder="Email" >
            </div>
            <div class="field input" v-if="connect === 'Phone'">
              <vue-tel-input v-model="phone" class="tel-input" ></vue-tel-input>
            </div>
          </transition-group>
          <div class="name-details">
            <div class="field input">
              <input v-model="password" :type="show === true ? 'text' : 'password'" class="ip" placeholder="Mot de passe" >
              <span class="eye1" @click="maskPassword" v-if="show ===true "><font-awesome-icon icon="fa-solid fa-eye"/></span>
              <span class="eyes1" @click="showPassword" v-if="show == false "><font-awesome-icon icon="fa-solid fa-eye-slash" /></span>
            </div>
            <div class="field input">
              <input v-model="password_verified" :type="show === true ? 'text' : 'password'" class="ip1" placeholder="Confirmer">
              <span class="eye1" @click="maskPassword" v-if="show ===true "><font-awesome-icon icon="fa-solid fa-eye"/></span>
              <span class="eyes1" @click="showPassword" v-if="show == false "><font-awesome-icon icon="fa-solid fa-eye-slash" /></span>
            </div>
          </div>
          <div class="field radio">
            <input type="checkbox" class="checkbox">
            <label class="link">J'ai lu et j'accepte <router-link to="#" class="condition">la politque de confidentialité</router-link> et <router-link to="#" class="condition">les règles générales d'utilisation</router-link> de TV+</label>
          </div>
          <div class="field button"  >
            <input value="S'inscrire" type="submit" v-on:click="createAccount()" >
          </div>
      </form>
      <div class="link">Vous avez déjà un compte ? <router-link to="/login" class="condition">Se Connecter</router-link></div>
    </section>
  </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState} from 'vuex'
export default {
  name: 'FormSignUp',
  data(){
    return{
      message_error:'',
      first_name:'',
      last_name:'',
      username:'',
      email:'',
      password:'',
      password_verified:'',
      tel:'',
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
      showPassword(){
        this.show=true;
      },
      maskPassword(){
        this.show=false;
      },
     createAccount() {
      if(this.first_name == '' || this.last_name == '' || this.username == '' || this.email == '' || 
      this.password == '' || this.password_verified == ''){
        this.message_error='Veuillez remplir tous les champs'
      }else{
        if(this.password_verified != this.password){
          this.message_error='Les mots de passe sont différents'
        }else{
          this.message_error=''
          const self = this;
          this.$store.dispatch('createAcount', {
            name:this.first_name,
            surname:this.last_name,
            username:this.username,
            email:this.email,
            //telephone:this.tel,
            password:this.password
          })
            .then(function(response){
              self.$router.push('/login')
              console.log(response)
            })
            .catch(function(error) {
              console.log(error)
            })
        }
      }
    }
  }
}
</script>

<style>
  .eye1{
      color: white;
      position: relative;
      bottom: 30px;
      left: 85%;
      width: 10px;
      height: 1px;
    }
    .eyes1{
      color: #acabab;
      position: relative;
      bottom: 30px;
      left: 85%;
      width: 10px;
      height: 1px;
    }
  .bl{
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
    }
  .wrapper{
    background: #121212;
    min-width: 475px;
    border-radius: 18px;
    box-shadow: 0 0 128px 0 rgba(0,0,0,0.1), 0 32 64 -48 rgba(0,0,0,0.5);
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
  .form form .error-text{
    color: white;
    font-weight: 700;
    font-size: 25px;
    padding-top: 20px;
    margin-bottom: 5px;
    text-align: center;
  }
  .form form .name-details{
    @apply grid grid-cols-2 gap-2;
  }
 
  .form form .field{
    flex-direction: column;
    @apply flex;
  }
  .form form .field input{
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
</style>
