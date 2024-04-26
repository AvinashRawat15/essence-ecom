<template>
  <v-app>
    <HeaderView />
    <router-view />
    <!-- <ContentView /> -->
    <!-- <CartView /> -->
    <!-- <LogIn /> -->
    <FooterView />
  </v-app>
</template>

<script>
// import HeaderView from "./components/HeaderView.vue";
// import FooterView from "./components/FooterView.vue";
// import ContentView from "./components/ContentView.vue";
import CartView from "./components/CartView.vue";
import LogIn from "./components/LogIn.vue";
import favourites from "./components/FavouriteView.vue";
// import profile from "./components/ProfileView.vue";

export default {
  name: 'App',

  components: {
    // HeaderView,
    // FooterView,
    // ContentView,
    CartView,
    LogIn,
    favourites,
    // profile
  },
}
</script>