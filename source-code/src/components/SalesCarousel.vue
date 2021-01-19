<template>
  <div>
    <v-container>
      <v-carousel
        cycle
        interval="4000"
        height="400"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-card>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            :alt="item.alt"
          >
            <v-sheet color="grey-dark">
              <div class="text-center text-uppercase themecolor">
                <h2>{{ item.product }}</h2>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-card>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SalesCarousel",
  data() {
    return {
      items: [
        {
          src: "uploads/chc2.jpg",
          alt: "logo2",
          product: "charcoal"
        },
        {
          src: "uploads/ssm2.jpg",
          alt: "logo2",
          product: "sesame seeds"
        },
        {
          src: "uploads/shb2.jpg",
          alt: "logo2",
          product: "shea butter"
        },
        {
          src: "uploads/csh1.jpg",
          alt: "logo2",
          product: "dried cashew nuts"
        },
        {
          src: "uploads/pnt1.jpg",
          alt: "logo2",
          product: "peanuts"
        }
      ]
    }
  }
}
</script>
