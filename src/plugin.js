import stylizeDirective from './directives/stylize-directive';

const plugin = {
  install(Vue) {
    Vue.directive(stylizeDirective.name, stylizeDirective.directive);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
