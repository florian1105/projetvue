// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import FlashMessage from '@smartweb/vue-flash-message'
Vue.use(FlashMessage)
Vue.config.productionTip = false
Vue.use(Vuex)

// Your branch is ahead of 'origin/master' by 1 commit.
const store = new Vuex.Store({
  state: {
    jwt : null,
    user : null,
    articlesliste : null,
    auteurid : null,
  },
  mutations: {
    loadJwt (state, jwt) {
      state.jwt=jwt
    },
    loadUser (state, user){
      state.user=user
    },
    loadAuteurId (state, id){
      state.auteurid=id
    },
    deconnect (state){
      state.user=null
      state.jwt=null
    },
    loadArticles (state, articles){
      state.articlesliste = articles
    },
    deleteArticle (state, id){
      var index = state.articlesliste.findIndex(function(item, i){
        return item.id === id
      });
      state.articlesliste.splice(index,1)

    },
    updateArticle (state,articleModif){
      var index = state.articlesliste.findIndex(function(item, i){
        return item.id === articleModif.id
      });
      var article =  state.articlesliste[index]
      article.nom = articleModif.nom
      article.contenu=articleModif.contenu
      state.articlesliste.splice(index,1,article)
    },
    addArticle (state,article){
       state.articlesliste.unshift(article);

    }

  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : router,
  store : store,
  components: { App },
  template: '<App/>'
})
