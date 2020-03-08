import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaGame from './components/TriviaGame.vue'
import GameMenu from './components/GameMenu.vue'
import GamePlay from './components/GamePlay.vue'
import QuizQuestion from './components/QuizQuestion.vue'
import QuizResults from './components/QuizResults.vue'
import GameOver from './components/GameOver.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)


Vue.use(VueRouter);

require('./scss/main.scss');

Vue.config.productionTip = false

const routes = [
  { path: '/trivia', component: TriviaGame},
  { path: '/gamemenu', component: GameMenu},
  { path: '/gameplay', component: GamePlay},
  { path: '/quizquestion', component: QuizQuestion},
  { path: '/gameover', component: GameOver},
  { path: '/quizresults', component: QuizResults}
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
