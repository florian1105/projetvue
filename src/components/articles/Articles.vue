<template>
  <div>
    <h2>Articles</h2>

    <div class='row'>
      <ArticleDetail class = 'col s6'
                     v-if='$store.state.articlesliste!=null'
                     v-for='article in $store.state.articlesliste'
                     :key='article.id'
                     v-bind:nom='article.nom'
                     v-bind:contenu='article.contenu'
                     v-bind:auteur='article.auteur[0].username'

      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ArticleDetail from "./ArticleDetail";

  export default {
    name: "Articles",
    components: {ArticleDetail},


    mounted() {
      axios
        .get('https://projetnodevue.herokuapp.com/articles',{headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => {
          this.$store.commit('loadArticles',response.data)
        })
        .catch(error => console.log(error))
    }

  }

</script>

<style scoped>

</style>
