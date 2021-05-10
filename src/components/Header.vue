<template>
  <div
  class='Header'>
    <v-parallax
    dark
    height="800"
    jumbotron
    src="https://i.ibb.co/qp9qfKb/photography-account-1s-Sfrozgi-Fk-unsplash.jpg"
    width='400'
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>

  <v-img src='https://i.ibb.co/xL0mWH7/christian-wiediger-Wkf-Drhx-DMC8-unsplash.jpg' />
    
  </div>
</template>

<script>
export default {
name: 'Header',
data: () => ({
      show: false,
    }),

}
</script>

<style scoped>

</style>