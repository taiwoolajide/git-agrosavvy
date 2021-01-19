<template>
  <div class="bg-blue text-center white--text pa-3">
    <div class="py-2">
      <span>
        <h3 class="themecolor"><em>VALUES AND ASSURANCES<hr></em></h3>
      </span>
      <br>
      <h4 class="grey--text">What you stand to enjoy when you trade with us:</h4>
      <v-row justify="center">
        <v-col
          cols="12" sm="6" lg="2"
          v-for="(item, i) in items"
          :key="i"
        >
          <h1 class="mt-5 grey--text">{{ item.number }}</h1>
          <h4 class="text-uppercase mb-2 themecolor">{{ item.title }}</h4>
          <span class="grey--text">{{ item.details }}</span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QualityAssurance',

  data() {
    return {
      items: [
        {
          number: "1",
          title: "best quality",
          details: "Our services and products are offered with excellence as the driving force. We meet clients' specific product demands."
        },
        {
          number: "2",
          title: "work dynamics",
          details: "We endeavour to appreciate and consider the differentiating factors among our customers all over the world."
        },
        {
          number: "3",
          title: "affordability",
          details: "Our high quality services still go for very affordavle prices."
        },
        {
          number: "4",
          title: "efficiency",
          details: "Plus the highest quality products that we offer, we ensure efficiency in our sourcing, processing, packaging, and distribution."
        },
        {
          number: "5",
          title: "values",
          details: "Excellent service delivery, performance, quality assurance, and honesty form our core and prized values."
        },
      ]
    }
  }
}
</script>

<style>
  .bg-blue {
    background-color: rgb(56, 53, 50);
  }
</style>