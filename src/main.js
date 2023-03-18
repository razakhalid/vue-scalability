import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// load app schema and setAppSchema in the store
const bootstrapApp = async () => {
  try {
    await store.dispatch("appSchema/setAppSchema");
  } catch (err) {
    console.error(err)
  }
}

bootstrapApp().then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
});
