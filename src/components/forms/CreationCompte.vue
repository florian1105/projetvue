<template>
  <div class='mt-4'>
    <h2>S'inscrire</h2>
    <div class='card m-2 col s6' style='width:50rem; margin: 0px auto;'>
      <div class='card-body '>
        <label>Nom d'utilisateur :
          <input v-model='username' style='text-align: center'>
        </label>
        <label> Adresse mail :
          <input v-model='email' type="email" style='text-align: center'/>
        </label>
        <label> Mot de passe :
          <input v-model='password' type="password" style='text-align: center' />
        </label>
          <a class='waves-effect waves-light btn'  id='modifier' @click='enregistrer($event)' v-show='!clicked'>Enregistrer</a>
          <Circle2 v-show='clicked' style='justify-content: center;'/>
      </div>
      <FlashMessage/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Circle2} from 'vue-loading-spinner'
  export default {
    name: "CreationCompte",
    data : function () {
      return  {
        'username':null,
        'email':null,
        'password':null,
        clicked:false,
      }
    },
    components :{
      Circle2
    },
    methods : {
      enregistrer : function () {
        this.clicked=true;
        const member = {
          'username':this.username,
          'email':this.email,
          'password':this.password,
        };
        if(!this.username || !this.email || !this.password){
          this.flashMessage.show({status: 'error', title: 'Champs manquants', message: 'Tous les champs doivent être remplis'});
        }else {
          axios.post('https://projetnodevue.herokuapp.com/register',member).then(res => {
              this.$router.push('/');
          });
        }

      }
    },
  }
</script>

<style scoped>

</style>
