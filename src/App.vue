<template>
  <div id="app">
    hello
    <HueButton label="hello" />
    <HueMessage message="Lorem ipsum" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HueButton from "@/components/HueButton/HueButton.vue";
import HueMessage from "@/components/HueMessage/HueMessage.vue";

@Component({
  components: {
    HueButton,
    HueMessage
  }
})
export default class App extends Vue {}
</script>
<style lang="scss"></style>
