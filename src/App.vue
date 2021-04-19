<template>
  <v-app id="app">
    <!-- <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="680"
    jumbotron
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax> -->

  <div class="v-image v-responsive theme--light" style="min-height: calc(100vh - 100px);"><div class="v-responsive__sizer" style="padding-bottom: 66.6838%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 1900px;"><div class="container fill-height"><div class="row white--text mx-auto align-center justify-center"><h1 class="white--text text-center col col-12"><span class="font-weight-light display-2">
                      WELCOME TO
                    </span> <br> <span class="font-weight-black display-4">
                      VUETIFY
                    </span></h1> <button type="button" onClick="document.getElementById('hello').scrollIntoView();" class="align-self-end v-btn v-btn--fab v-btn--outlined v-btn--round theme--dark v-size--default"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-down theme--dark"></i></span></button></div></div></div></div>


                    <button type="button" class="align-self-end v-btn v-btn--fab v-btn--outlined v-btn--round theme--dark v-size--default"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-down theme--dark"></i></span></button>
  <v-app-bar
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        afafas
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/about"
        target="_blank"
        text
      >
        <span class="mr-2">Fernando Test</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app img{
  height: 100%;
}
/* .cover{
    min-height: 10%;
    min-width: 100%;
    top: 0; 
    left: 0; 
    margin: 0!important;
    padding: 0!important;
} */
html{
    scroll-behavior: smooth;
}
</style>
