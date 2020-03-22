import Vue from 'vue'
import Router from 'vue-router'
import Articles from "../components/articles/Articles";
import Connexion from "../components/forms/Connexion";
import MesArticles from "../components/articles/MesArticles";
import Deconnexion from "../components/Deconnexion";
import CreationArticle from "../components/forms/CreationArticle";
import ArticleComplet from "../components/articles/ArticleComplet";
import CreationCompte from "../components/forms/CreationCompte";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articles',
      component: Articles
    },
    {
      path:'/articleComplet/:id',
      name : 'articleComplet',
      component : ArticleComplet
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path :'/deconnexion',
      name :'deconnexion',
      component : Deconnexion,
    },
    {
      path:'/mesArticles',
      name: 'mesArticles',
      component : MesArticles
    },
    {
      path:'/creationArticle',
      name : 'creationArticle',
      component : CreationArticle
    },
    {
      path:'/creationCompte',
      name : 'creationCompte',
      component : CreationCompte
    }


  ]
})
