<template>
  <div class="home">
    <v-row>
      <Header />
    </v-row>
    <v-row class="text-center">
      <v-col cols='12'>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </v-col>
      <v-col cols='12'>
        <NetlifyForm />
      </v-col>
     </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import HelloWorld from '../components/HelloWorld'
import NetlifyForm from '../components/netlifyComponents/NetlifyForm'

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld,
    NetlifyForm
  }
}
</script>
