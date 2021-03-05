<template>
  <p class="message">{{ message }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "hue-message"
})
export default class HueMessage extends Vue {
  @Prop() private message!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped lang="scss">-->
<!--@import "HueMessage";-->
<!--</style>-->
