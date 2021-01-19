<template>
  <div class="bg-grey pa-3">
    <div>
      <h1 class="text-center">CHARCOAL PRODUCTS</h1>
      <br>
      <v-row>
        <v-col cols="12" sm="7" class="text-center">
          <h3>GENERAL DESCRIPTION:</h3>
          <span>
            We sell international grade hardwood charcoal that meets the specifications and packaging requirements of our clients. We pride ourselves in our excellent customer service delivery, the quality of our products and the speed of execution of our clients’ order. With us, you will never have to worry about the hassles and complexities involved in sourcing for high quality and competitively priced charcoal from Africa.
          </span>
        </v-col>
        <v-col cols="12" sm="5">
          <h3>Delivery Terms:</h3>
          <span>*****</span>
          <h3>Packaging Terms:</h3>
          <span>*****</span>
        </v-col>
      </v-row>
    </div>
    <div class="container my-7">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card elevation="3" class="pt-3">
            <v-img            
              contain
              max-height="350"
              :src="charcoalImage"
              :alt="charcoalAlt"
            ></v-img>
            <h3 class="text-center mt-2">{{ charcoalType }} Charcoal</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2>Specifications:</h2>
            <span>{{ charcoalSpecification }}</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
    
    <div>
      <v-row class="text-center my-3">
        <v-col
          cols="12" sm="4"
          v-for="(charcoal, index) in charcoals"
          :key="charcoal.charcoalId"
          @click="updateCharcoal(index)"
        >
          <v-img
            contain
            max-height="250"
            :src="charcoal.src"
            :alt="charcoal.alt"
          ></v-img>
          <h3 class="mt-2">{{ charcoal.type }} Charcoal</h3>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoalProducts",

  data() {
    return {
      selectedCharcoal: 0,
      charcoals: [
        {
          charcoalId: 1,
          src: "uploads/chc3.jpg",
          type: "1****",
          alt: "1**** Charcoal",
          specification: "1***"
        },
        {
          charcoalId: 2,
          src: "uploads/chc2.jpg",
          type: "2****",
          alt: "2**** Charcoal",
          specification: "2***"
        },
        {
          charcoalId: 3,
          src: "uploads/chc3.jpg",
          type: "3****",
          alt: "3**** Charcoal",
          specification: "3***"
        }
      ]
    }
  },
  methods: {
    updateCharcoal(index) {
      this.selectedCharcoal = index
      console.log(index)
    }
  },
  computed: {
    charcoalImage() {
      return this.charcoals[this.selectedCharcoal].src
    },
    charcoalSpecification() {
      return this.charcoals[this.selectedCharcoal].specification
    },
    charcoalType() {
      return this.charcoals[this.selectedCharcoal].type
    },
    charcoalAlt() {
      return this.charcoals[this.selectedCharcoal].alt
    }
  }
}
</script>

<style>
  .border {
    border: 3px solid #ffb222;
  }
</style>