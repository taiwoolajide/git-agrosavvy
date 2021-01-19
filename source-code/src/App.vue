<template>
  <div>
    <v-app>
      <v-app-bar
        app
        clipped-right
        max-height="90px"
      >
        <router-link :to="{name: 'home'}" class=" pt-5">
          <v-img
            contain
            position="left"
            :max-width="logowidth"
            :max-height="logoheight"
            src="uploads/logo.png"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>

        <div v-show="!mobile">
          <v-btn text :to="{name: 'home'}"><v-icon :color="themeColor">mdi-home</v-icon> Home</v-btn>
          <v-btn text :to="{name: 'about'}"><v-icon :color="themeColor">mdi-clipboard-text</v-icon> About</v-btn>

          <v-menu
            open-on-hover
            bottom
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
              
                :to="{name: 'products'}"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon :color="themeColor">mdi-view-list</v-icon>
                Products
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(product, index) in products"
                :key="index"
              >
                <v-btn text :to="product.link">{{ product.title }}</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn text :to="{name: 'contact'}"><v-icon :color="themeColor">mdi-map-marker-radius</v-icon>Contact</v-btn>
        </div>

        <v-app-bar-nav-icon @click="drawer=!drawer" v-show="mobile"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>

      <v-navigation-drawer
        :app="mobile"
        right
        clipped
        stateless
        v-model="drawer"
        v-show="mobile"
      >
        <nav-drawer :hideDrawer="hideDrawer"></nav-drawer>
      </v-navigation-drawer>

      <v-footer outlined>
        <div class="mx-auto">
          <div>
            <b>Copyright &copy; {{ new Date ().getFullYear() }} AgroSavvy. All rights reserved.</b>
          </div>
          <div>
            <v-row justify="center">
              <social-site></social-site>
            </v-row>
          </div>
        </div>
        
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import NavDrawer from './components/NavDrawer.vue';
import SocialSite from './components/SocialSite.vue';

export default {
  name: "App",

  data: () => ({
    drawer: false,
    themeColor: "#fab73a",
    
    products: [
        {
          title: 'Charcoal',
          link: 'coal'
        },
        {
          title: 'Peanuts',
          // link: 'peanuts'
        },
        {
          title: 'Dried Cashew Nuts',
          // link: 'cashew'
        },
        {
          title: 'Shea Butter',
          // link: 'butter'
        },
        {
          title: 'Sesame Seeds',
          // link: 'sasame'
        },
      ],
  }),

  components: { NavDrawer, SocialSite, },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    logowidth(){
      return this.mobile ? '8rem' : '10rem'      
    },
    logoheight(){
      return this.mobile ? '10rem' : '11rem'      
    }
  },
  watch: {
    mobile(newValue) {
      if (newValue) {
        this.drawer = false
      }
    }
  },
  methods: {
    hideDrawer(){
      if(this.mobile){
        this.drawer = false;
      }
    }
  }
}
</script>

<style>
  .themecolor {
    color: #fab73a;
  }
</style>