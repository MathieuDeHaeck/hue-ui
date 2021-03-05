<template>
  <button class="button">{{ label }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "hue-button"
})
export default class HueButton extends Vue {
  @Prop() private label!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "HueButton";
</style>
