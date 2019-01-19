import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css';
import App from './App';
import jfFilters from './utils/filter';

import store from './store/store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
Vue.use(jfFilters);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
