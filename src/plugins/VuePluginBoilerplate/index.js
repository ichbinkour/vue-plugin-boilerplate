import VuePluginBoilerplate from './vue-plugin-boilerplate.vue';

export default {
  install(vue, opts) {
    vue.component(VuePluginBoilerplate.name, VuePluginBoilerplate)
    console.log('Installing the CommentsOverlay plugin!')
    // Fun will happen here
  }
}
