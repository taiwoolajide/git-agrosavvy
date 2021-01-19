<template>
  <div class="bg-grey">
    <v-row justify="center">
      <v-col
        cols="12" sm="6" md="2"
        v-for="product in products"
        :key="product.id"
      >
        <div
          class="py-2 card-hover"
        >
          <router-link :to="product.link">
            <v-img
              contain
              max-height="200"
              :title="product.title"
              :src="product.src"
              :alt="product.alt"
            ></v-img>
          </router-link>
          <div class="text-center my-2">
            <b>{{ product.name }}</b>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Vue from "vue";
import { uuid } from '@/services'

export default {
  name: "ProductItems",
  data() {
    return {
      products: [
        {
          id: uuid(),
          src: "uploads/chc1.jpg",
          alt: "Charcoal",
          name: "Charcoal",
          title: "Go to Charcoal page",
          link: "coal"
        },
        {
          id: uuid(),
          src: "uploads/pnt2.jpg",
          alt: "Peanuts",
          name: "Peanuts",
          // title: "Go to Peanuts page",
          link: ""
        },
        {
          id: uuid(),
          src: "uploads/csh2.jpg",
          alt: "Dried Cashew Nuts",
          name: "Dried Cashew Nuts",
          // title: "Go to Cashew Nuts page",
          link: ""
        },
        {
          id: uuid(),
          src: "uploads/shb1.jpg",
          alt: "Shea Butter",
          name: "Shea Butter",
          // title: "Go to Shea Butter page",
          link: ""
        },
        {
          id: uuid(),
          src: "uploads/ssm1.jpg",
          alt: "Sesame Seeds",
          name: "Sesame Seeds",
          // title: "Go to Sesame Seeds page",
          link: ""
        }
      ],
    }
  }
}
</script>

<style>
  .bg-grey {
    background-color: #bebaba;
  }
  .card-hover:hover {
    transform: scale(1.08);
  }
</style>