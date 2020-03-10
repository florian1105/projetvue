import Vue from 'vue'
import Router from 'vue-router'
import Articles from "../components/articles/Articles";
import Connexion from "../components/forms/Connexion";
import Home from "../components/Home";
import MesArticles from "../components/articles/MesArticles";
import Deconnexion from "../components/Deconnexion";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
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
    }
  ]
})
