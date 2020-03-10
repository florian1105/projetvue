// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    jwt : null,
    user : null,
    articlesliste : null,
  },
  mutations: {
    loadJwt (state, jwt) {
      state.jwt=jwt
    },
    loadUser (state, user){
      state.user=user
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
      state.articlesliste = state.articlesliste.splice(index,1)

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
