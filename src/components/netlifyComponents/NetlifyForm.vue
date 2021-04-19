<template>
<v-card
    class="mx-auto"
    max-width="640"
    elevation='2'
    outlined
  >
    <v-card-title>
      Contact me
    </v-card-title>
       <v-alert 
       v-model='successAlert'
       type="success"
       dismissible
       close-text="Close Alert"
       elevation='5'
  
       >
      Message Submitted!
    </v-alert>
    <v-alert 
       v-model='errorAlert'
       type="error"
       dismissible
       close-text="Close Alert"
       elevation='5'
  
       >
      Message cannot be submitted. Please try again.
    </v-alert>


    <form
    @submit.prevent="handleSubmit"
    name="contact-me"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
     <v-card-text>
        <v-text-field
            v-model="form.email"
            name="email"
            label="Email"
        >
        </v-text-field>

        <v-text-field
            v-model="form.fullname"
            name="fullname"
            label="Full name"
        >
        </v-text-field>
        
        <v-text-field
            v-model="form.company"
            name="company"
            label="Company name"
        >
        </v-text-field>
    
        <v-textarea
          v-model="form.message"
          name="message"
          label="Leave your message here"
        >
        </v-textarea>
    </v-card-text>

    <v-divider/>    
    <v-card-actions>
    
        <v-btn
        type="submit"
        color="success"
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
    form: {
        email:'',
        fullname:'',
        company:'',
        message:''
    },
    successAlert: false,
    errorAlert: false
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
          "form-name": "contact-me",
          ...this.form
        }),
        axiosConfig
      ).then(() =>{
          this.successAlert = true;
          this.errorAlert = false;
      }).catch(()=>{
          this.errorAlert = true;
          this.successAlert = false;
      });
    }
}

}
</script>

<style scoped>

</style>