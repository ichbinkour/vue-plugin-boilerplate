import VuePluginBoilerplate from './vue-plugin-boilerplate.vue';

const VuePlugin = {
  install(Vue, opts) {
    Vue.component(VuePluginBoilerplate.name, VuePluginBoilerplate)
    console.log('Installing the CommentsOverlay plugin!')

    Vue.mixin({
      mounted() {
        console.log('Mounted!');
      }
    });
  }
}

export default VuePlugin;


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlugin)
}
