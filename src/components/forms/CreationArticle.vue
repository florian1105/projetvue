<template>
  <div class='mt-4'>
    <h2>Ajouter un article</h2>
    <div class='card m-2 col s6' style='width:50rem; margin: 0px auto;'>
      <div class='card-body '>
        <label>Nom de l'article :
          <input v-model='nom' style='text-align: center'>
        </label>
        <label> Contenu :
          <textarea class="materialize-textarea" v-model='contenu' type="text" style='height: 30rem; '/>
        </label>
        <div v-if='this.$store.state.user' id='bouttonModif' style='display: flex;justify-content: center'>
          <a class='waves-effect waves-light btn'  id='modifier' @click='ajouterArticle($event)' v-show='!clicked'>Enregistrer</a>
          <Circle2 v-show='clicked' style='justify-content: center;'/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {Circle2} from 'vue-loading-spinner'
  import axios from "axios";
  export default {
    name: "CreationArticle",
    data () {
      return {
        nom: '',
        contenu: '',
        clicked : false,
        dateCreation:'',
      }
    },
    components : {
      Circle2
    },
    methods: {
      ajouterArticle : function(event){
        if(!this.contenu || !this.nom){

        }else{
          this.clicked=true;
          const config = {
            headers: {
              Authorization: "Bearer " + this.$store.state.jwt
            }
          };
          axios.post('https://projetnodevue.herokuapp.com/article/add/',{'nom':this.nom,'contenu':this.contenu,
            'dateCreation':Date.now(),'auteur':{'_id':this.$store.state.auteurid}},config).then(response => {
              var articleBase = response.data;
              var article = {
                '_id':articleBase._id,
                'nom':articleBase.nom,
                'dateCreation':articleBase.dateCreation,
                'contenu':articleBase.contenu,
                'auteur':articleBase.auteur,
                'id':articleBase.id
              }
            this.$store.commit('addArticle',article);
            this.$router.push('mesArticles');
            this.clicked=false;
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
