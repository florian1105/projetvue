<template>
  <div class='card m-2 col s6' style='width: 35rem; '>
    <div class='card-body '>
      <label> Titre de l'article :
        <input v-model='nomModif' style='text-align: center'>
      </label>
      <label> Contenu :
        <textarea class="materialize-textarea" v-model='contenuModif' type="text" style='height: 30rem; overflow-y: scroll; '/>
      </label>
      <div v-if='this.$store.state.user===auteurEmail' id='bouttonModif' style='display: flex;justify-content: center'>
        <a class='waves-effect waves-light btn'  id='modifier' @click='enregistrerArticle($event)' v-show='!clicked'>Enregistrer</a>
        <Circle2 v-show='clicked' style='justify-content: center;'/>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    import {Circle2} from 'vue-loading-spinner';

    export default {
        name: "ModifArticle",
      components: {
        Circle2
      },

      data : function(){
        return {
          'nomModif':this.nom,
          'contenuModif':this.contenu,
          'clicked' : false,
        }
      },
      props : [
        'id','nom','date','contenu','auteur','auteurEmail','_id'
      ],
      methods : {
          enregistrerArticle : function(envent){
            this.clicked=true;
            const config = {
              headers: {
                Authorization: "Bearer " + this.$store.state.jwt
              }
            };
            axios.post('https://projetnodevue.herokuapp.com/article/modify/'+this._id,{'nom':this.nomModif,'contenu':this.contenuModif},config).then(response => {
              this.$store.commit('updateArticle',{'id':this.id,'nom':this.nomModif,'contenu':this.contenuModif});
              this.$emit('modification-ok');
              this.clicked=false;
            })
          }
      }

    }
</script>

<style scoped>

</style>
