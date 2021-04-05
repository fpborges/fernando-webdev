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
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
     <v-card-text>
        <input type="hidden" name="form-name" value="ask-question" />
        <v-radio-group
            v-model="currentPanelist">
            <v-radio
            v-for="(panelist,index) in panelists" :key="index"
            :label="`${panelist}`"
            :value="panelist"
            :checked="panelist === currentPanelist"
            />

        </v-radio-group>
    <span>{{ currentPanelist }}</span>
    </v-card-text>
    <v-divider/>    
    <v-card-actions>
    
        <v-btn>Submit</v-btn>
    </v-card-actions>
       
  </form>
  </v-card>
  
</template>

<script>
export default {
name: 'NetlifyForm',
data: () => ({

    panelists: ['Evan You', 'Chris Fritz'],
    currentPanelist: 'Evan You',


}),

methods:{
    // updatePanelist(ev){
    //     this.currentPanelist= ev.target.value
    // }
}

}
</script>

<style scoped>

</style>