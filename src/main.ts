// @ts-nocheck
// import Vue from "vue";
// import App from "./App.vue";
//
// Vue.config.productionTip = false;
//
// new Vue({
//   render: h => h(App)
// }).$mount("#app");

// import * as components from "./components";
//
// const HueUIComponents = {
//   install(Vue, options = {}) {
//     // components
//     for (const componentName in components) {
//       const component = components[componentName];
//
//       Vue.component(component.name, component);
//     }
//   }
// };

// export default HueUIComponents;

// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(HueUIComponents);
// }

// export { HueButton } from './components/HueButton/HueButton.vue';
// export { HueMessage } from './components/HueMessage/HueMessage.vue';

import HueButton from "./components/HueButton/HueButton.vue";
import HueMessage from "./components/HueMessage/HueMessage.vue";

export { HueButton, HueMessage };
