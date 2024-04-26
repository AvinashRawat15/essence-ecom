<template>
  <v-container class="mb-8 bg-primary">
    <v-app-bar class="indigo" :elevation="2" style="background-color: #6363c5;">
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-btn variant="text" link to="/">Essence</v-btn>
      </template>

      <template v-slot:append>
        <v-tooltip text="Favourites" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="pink" icon="mdi-heart" to="/favourites"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip text="Go to Cart" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-cart" to="/CartView"></v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Search" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-magnify" @click="dialog = true"></v-btn>
            <v-dialog v-model="dialog" width="400" class="flex">
              <v-card color="surface-light" max-width="400">
                <v-card-text>
                  <!-- <v-col cols="12" md="1" sm="12"> -->
                  <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="default" label="Search"
                    variant="regular" hide-details single-line @click:append-inner="onClick"></v-text-field>
                  <!-- </v-col> -->

                </v-card-text>
              </v-card>
            </v-dialog>
          </template>
        </v-tooltip>
        <!-- <v-tooltip text="Search" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-magnify"></v-btn>
          </template>
        </v-tooltip> -->
        <!-- <ProfileView :user="user" @logout="logout" /> -->
        <v-tooltip text="Profile" location="bottom">
          <template v-if="login">
            <v-container style="height: 300px" fluid>
              <v-row justify="center">
                <v-menu min-width="200px" rounded>
                  <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                      <v-avatar color="brown" size="large">
                        <span class="text-h5">{{ user.initials }}</span>
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <div class="mx-auto text-center">
                        <v-avatar color="brown">
                          <span class="text-h5">{{ user.initials }}</span>
                        </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                          {{ user.email }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn variant="text" rounded>
                          Edit Account
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn variant="text" rounded>
                          Log Out
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </v-row>
            </v-container>
          </template>

          <template v-if="logout" v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account-circle" to="/LogIn"></v-btn>
          </template>
        </v-tooltip>

      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
    <!-- <v-main style="height: 500px"></v-main> -->
  </v-container>
</template>

<script>
// import profile from './ProfileView.vue'
import axios from 'axios';
export default {
  name: "HeaderView",
  // components: {
  //   profile
  // },
  data: () => ({
    user: null,
    drawer: false,
    login: false,
    logout: true,
    dialog: false,
    loaded: false,
    loading: false,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),
  methods: {
    async login() {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          params: {
            email: this.email,
            password: this.password,
          },
        });
        if (response.data.length > 0) {
          this.user = response.data[0];
          this.loggedin = true;
          alert('Login successful');
          // <router-link to="profile"></router-link>
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      this.user = null;
      this.loggedin = false;
    },
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>