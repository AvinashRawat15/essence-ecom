<template>
  <v-container class="mb-8 bg-primary">
    <v-app-bar class="indigo" :elevation="2" style="background-color: #6363c5">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          color="white"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-btn variant="text" link to="/">Essence</v-btn>
      </template>

      <template v-slot:append>
        <v-tooltip text="Favourites" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              color="pink"
              icon="mdi-heart"
              to="/favourites"
            ></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip text="Go to Cart" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-cart" to="/CartView"></v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Search" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-magnify"></v-btn>
          </template>
        </v-tooltip>
        <h1 v-if="userName">Hi, {{ userName }}</h1>
        <v-tooltip v-if="!userName" text="Profileooo" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account-circle" to="/LogIn"></v-btn>
          </template>
        </v-tooltip>
        <v-btn v-else v-bind="props" to="/LogIn" @click="logout">Log out</v-btn>

        <v-menu v-if="userData?.id" min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar color="brown" size="large">
                <span class="text-h5">{{
                  userData?.name?.slice(0, 2)?.toUpperCase()
                }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <h3>Hi, {{ userData.name }}</h3>
                <p class="text-caption mt-1">
                  {{ userData.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn variant="text" rounded @click="logout"> Logout </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "HeaderView",
  data: () => ({
    drawer: false,
    dialog: false,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
    },
  },
  computed: {
    userData() {
      let userData = JSON.parse(localStorage.getItem("userCredentials"));
      return userData || null;
    },
  },
};
</script>
