import Vue from "vue";
import HueButton from "./HueButton.vue";
import HueMessage from "./HueMessage.vue";

const Components = {
  HueButton,
  HueMessage
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
