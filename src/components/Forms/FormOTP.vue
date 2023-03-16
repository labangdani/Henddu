<template>
  <div class="bl">
      <div class="wrapper1">
        <section class="form signup">
            <header><div class="img"></div></header>
            <form >
            <div class="text1">Entrez le mot de passe reçu par message</div>
            
                <div class="otp">
                    <div class="field input">
                        <input v-model="password" class="opt-input" type="phone" name="" id="" maxlength="1">
                    </div>
                    <div class="field input">
                        <input v-model="password" class="opt-input" type="phone" name="" id="" maxlength="1">
                    </div>
                    <div class="field input">
                        <input v-model="password" class="opt-input" type="phone" name="" id="" maxlength="1">
                    </div>
                    <div class="field input">
                        <input v-model="password" class="opt-input" type="phone" name="" id="" maxlength="1">
                    </div>
                </div>
                
                <div class="field button">
                <input @click="login()" type="submit" value="Confirmer" >
                </div>
            </form>
        </section>
        </div>
    </div>
</template>

<script>
export default {
    name:'FormOTP',
}
</script>

<style>
    .otp{
        display: flex;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: space-between;
    }
    .otp .field{
        width: 17%;
        height: 50px;
    }
    .otp .field .opt-input{
        width: 100%;
        height: 50px;
        background-color: #fff;
        color: #121212;
        font-size: 1.4em;
        text-align: center;
        font-weight: 700;
    }
</style>