<template>
  <div class="hello">
    <div>
      <small>Flat</small>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
