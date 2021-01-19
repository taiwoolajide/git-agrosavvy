<template>
  <v-container>
    <v-card width="500" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="form.username"
            required
          />

          <v-text-field
            label="Password"
            :type="showPasswd ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPasswd ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showPasswd = !showPasswd"
            v-model="form.passwd"
            required
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" v-show="false">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="dark" type="submit" @click="onSubmit">Login</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" top color="error">
      <p>{{ invalidMsg }}</p>
    </v-snackbar>
  </v-container>
</template>

<script>
import { apiClient } from "@/services";
import user from '@/user'
import { mapActions } from 'vuex';

export default {
  name: "Login",
  data: () => ({
    showPasswd: false,
    form: { username: "", passwd: "" },
    snackbar: false,
    invalidMsg: 'Invalid login details. Try again.',
  }),
  methods: {
    ...mapActions(['setLogin', 'setCurUser']),
    onSubmit() {
      // console.log(this.form)
      apiClient
        .post('/api/login_admin.php', this.form)
        .then(res => {
          // console.log(res.data)
          if (res.data.id) {
            this.setCurUser(res.data);
            // sessionStorage.setItem('curUser', JSON.stringify(res.data))
            user.login = true;
            this.setLogin(true);
            const redirectPath = this.$route.query.redirect || "/";
            this.$router.push(redirectPath);
          } else {
            this.invalidMsg = res.data;
            this.snackbar = true;
          }
        })
        .catch(err => {
          this.invalidMsg = err.message;
          this.snackbar = true;
        });
    },
  },
};
</script>
