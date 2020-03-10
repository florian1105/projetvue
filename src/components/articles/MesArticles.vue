<template>
  <div>
    <h2>Articles</h2>

    <ArticleDetail
      v-if='$store.state.articlesliste'
      v-for='article in filteredarticlesliste'
      :key='article.id'
      v-bind:id='article.id'
      v-bind:nom='article.nom'
      v-bind:contenu='article.contenu'
      v-bind:auteur='article.auteur[0].username'
      v-bind:auteurEmail='article.auteur[0].email'
    />
  </div>
</template>

<script>
  import ArticleDetail from "./ArticleDetail";

  export default {
    name: "MesArticles",
    components: {ArticleDetail},

    data () {
      return {
        articlesliste: null,
      }
    },
    computed : {
      filteredarticlesliste : function (){
          return this.$store.state.articlesliste.filter(d => d.auteur[0].email === this.$store.state.user)
      }
    },


  }

</script>

<style scoped>

</style>
