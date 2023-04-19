<template>
  <div class="bl">
      <div class="wrapper1">
        <section class="form signup">
            <header><div class="img"></div></header>
            <form >
            <div class="text1">Souhaitez vous récupérer votre mot de passe ?</div>
                <br>
                <div class="field input">
                    <input v-model="password" type="text" name="" id="" placeholder="entrez votre adresse mail">
                </div>
                <br>
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

}
</script>

<style>

</style>