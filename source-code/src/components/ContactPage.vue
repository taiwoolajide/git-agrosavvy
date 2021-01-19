<template>
  <div>
    <v-row class="mx-auto" title="Best Charcoal, Sesame Seeds, Shea Butter, Dried Cashew Nuts, Peanuts, contact agrosavvy">
      <v-col cols="12" sm="6"   order="3" order-sm="1">
        <div class="contact">
          <h2>
            Contact Us:
          </h2>
          <br>
          <contact-details></contact-details>
          <social-site></social-site>
        </div>
      </v-col>
        
      <v-col cols="12" sm="6" order="2">
        <v-card elevation="6">
          <v-container>
            <v-form>
              <v-text-field
                label="Your Name"
                title="AgroSavvy needs your name"
                :color="themeColor"
                required
              ></v-text-field>
              <v-text-field
                label="Your E-mail"
                title="AgroSavvy needs your email"
                :color="themeColor"
                required
              ></v-text-field>
                <!-- v-model="form.phoneno" -->
              <v-text-field
                label="Your Phone Number"
                title="AgroSavvy needs your phone number"
                :color="themeColor"
                required
              ></v-text-field>
              <v-text-field
                label="Subject"
                title="AgroSavvy needs to know the subject of your message "
                :color="themeColor"
                required
              ></v-text-field>
              <v-textarea
                rows="3"
                auto-grow
                :color="themeColor"
                label="Message"
                title="AgroSavvy needs your message to serve you better"
                required
              ></v-textarea>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn :to="{name: 'home'}" color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn dark>Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
import SocialSite from './SocialSite.vue'

export default {
  name: "ContactPage",
  components: {
                ContactDetails,
                SocialSite,
              },

  data: () => ({
    themeColor: "#ffb222"
  }),
}
</script>

<style>
  .contact {
    border: 3px solid#fccf7b;
    margin: 25px;
    padding: 10px;
    text-align: center;
  }
</style>