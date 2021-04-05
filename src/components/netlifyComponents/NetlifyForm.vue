<template>
<v-card
    class="mx-auto"
    max-width="544"
    outlined
  >
    <v-card-title>
      Leave your message below
    </v-card-title>

    <form
    @submit.prevent="handleSubmit"
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
     <v-card-text>
        <v-text-field
            v-model="firstname"
            name="name"
            label="First name"
        >
        </v-text-field>

        <!-- <v-radio-group
            v-model="currentPanelist">
            <v-radio
            v-for="(panelist,index) in panelists" :key="index"
            :label="`${panelist}`"
            :value="panelist"
            :checked="panelist === currentPanelist"
            />

        </v-radio-group> -->
        <v-textarea
        name="question"
        v-model="question"
        >
        </v-textarea>
    <span>{{ currentPanelist }}</span>
    </v-card-text>
    <v-divider/>    
    <v-card-actions>
    
        <v-btn
        type="submit"
        >Submit</v-btn>
    </v-card-actions>
       
  </form>
  </v-card>
  
</template>

<script>
import axios from "axios";

export default {
name: 'NetlifyForm',
data: () => ({

    panelists: ['Evan You', 'Chris Fritz'],
    currentPanelist: 'Evan You',
    firstname: '',
    question: '',


}),

methods:{
     encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      ).then(() =>{
          alert('Form Submitted!');
      }).catch(()=>{
          alert('Error!');
      });
    }
}

}
</script>

<style scoped>

</style>