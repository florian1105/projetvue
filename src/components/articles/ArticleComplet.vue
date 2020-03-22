<template>
  <div class='container'>
    <div class='card' v-if='id'>
        <h5 class='card-title'>{{ nom }}</h5>
        <p class='card-text'>Publié le : {{date.split("T")[0]}}<br> à {{date.split("T")[1].slice(0,5)}}</p>
        <p class='card-text'>{{ contenu }}</p>
        <p class='card-text '><b>{{auteur}}</b></p>
        <div v-if='this.$store.state.user===auteurEmail' id='bouttonModif'>
          <button class='waves-effect waves-light btn' id='supprimer' @click='deleteArticle($event)' >Supprimer</button>
        </div>
  </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ArticleComplet",
    data: function () {
      return {
        'nom':null, 'auteur':null, 'contenu':null, 'auteurEmail':null, 'date':null, 'id':null
      }
    },
    methods: {
      deleteArticle: function (event) {
        const config = {
          headers: {
            Authorization: "Bearer " + this.$store.state.jwt
          }
        };
        axios.get('https://projetnodevue.herokuapp.com/article/delete/'+this.id,config).then(response => {
          console.log(response.data)
          this.$store.commit('deleteArticle',this.id)

        })
      }
  },
    mounted() {
      axios
      .get('https://projetnodevue.herokuapp.com/article/'+this.$route.params.id,{headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => {
          const article = response.data[0];
          this.nom=article.nom;
          this.auteur=article.auteur[0].username;
          this.auteurEmail=article.auteur[0].email;
          this.contenu=article.contenu;
          this.date=article.dateCreation;
          this.id=article.id;
        })
        .catch(error => console.log(error))
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
