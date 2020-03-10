<template>
  <div class='card m-2' style='width: 30rem; '>
    <div class='card-body z-depth-2'>
      <h5 class='card-title'>{{ nom }}</h5>
      <p class='card-text'>{{ contenu }}</p>
      <p class='card-text '><b>{{auteur}}</b></p>
      <div v-if='this.$store.state.user===auteurEmail' id='bouttonModif'>
        <a class='waves-effect waves-light btn'  id='modifier'>Modifier</a>
        <button class='waves-effect waves-light btn' id='supprimer' @click='deleteArticle($event)' >Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "ArticleDetail",
    props:[
      'nom','auteur','contenu', 'auteurEmail','id'
    ],
    methods: {
      deleteArticle: function (key) {
        axios.get('https://projetnodevue.herokuapp.com/article/delete/'+this.id,this.$store.state.jwt).then(response => {
          console.log(response.data)
          this.$store.commit('deleteArticle',this.id)

        })
      }
    }
  }
</script>

<style scoped>
  #supprimer{
    background-color: crimson;
  }
  #modifier{
    background-color: orange;
  }
  #bouttonModif{
    padding: 10px;
  }
</style>
