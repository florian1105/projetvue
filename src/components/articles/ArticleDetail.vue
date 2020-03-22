<template>
<div>
  <div style="min-height: 40rem" class="col s6 ">
    <div class='card m-2' style='width: 35rem;' >
      <div class='card-body ' style='cursor: pointer; padding:1rem ' @click='articleComplet(id)'>
        <h5 class='card-title'>{{ nom }}</h5>
        <p class='card-text'>Publié le : {{date.split("T")[0]}}<br> à {{date.split("T")[1].slice(0,5)}}</p>
        <p class='card-text'>{{ contenu }}</p>
        <p class='card-text '><b>{{auteur}}</b></p>
      </div>
      <div v-if='this.$store.state.user===auteurEmail' id='bouttonModif' style="z-index: 2">
        <a class='waves-effect waves-light btn'  id='modifier' @click='modifArticle($event)'>Modifier</a>
        <button class='waves-effect waves-light btn' id='supprimer' @click='deleteArticle($event)' >Supprimer</button>
      </div>
    </div>
  </div>
    <ModifArticle  @modification-ok='modifArticle' class='col s6'
                   v-if='this.$store.state.jwt'
                   v-show='this.showModif'
                   :key='this.id'
                   v-bind:id='this.id'
                   v-bind:_id='this._id'
                   v-bind:nom='this.nom'
                   v-bind:date='this.date'
                   v-bind:contenu='this.contenu'
                   v-bind:auteur='this.auteur'
                   v-bind:auteurEmail='this.auteurEmail'>
    </ModifArticle>
</div>
</template>

<script>
  import axios from "axios";
  import ModifArticle from "./ModifArticle";
  export default {
    name: "ArticleDetail",
    components: {ModifArticle},
    props:[
      'nom','auteur','contenu', 'auteurEmail','date','id','_id'
    ],
    data : function(){
      return {
        'showModif':false,
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
          this.$store.commit('deleteArticle',this.id);

        })
      },
      modifArticle : function () {
        this.showModif = !this.showModif;
      },
      articleComplet : function ($id) {
        this.$router.push({ path: `/articleComplet/${this.id}`});
      }
    },


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
