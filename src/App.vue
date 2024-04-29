<template>
  <v-app>
    <HeaderView />
    <router-view />
    <ContentView v-for="product in productStore.products"
    :key="product.name"
    :product="product" />
    <!-- <CartView /> -->
    <!-- <LogIn /> -->
    <FooterView />
    <!-- <ProfileView/> -->
  </v-app>
</template>

<script>
// import HeaderView from "./components/HeaderView.vue";
// import FooterView from "./components/FooterView.vue";
import ContentView from "./components/ContentView.vue";
import CartView from "./components/CartView.vue";
import LogIn from "./components/LogIn.vue";
import favourites from "./components/FavouriteView.vue";
// import profileview from "./components/ProfileView.vue";
// import {storeToRefs} from 'pinia';
import {useProductStore} from "./stores/ProductStore"
const productStore = useProductStore();
productStore.fill();

export default {
  name: 'App',

  components: {
    // HeaderView,
    // FooterView,
    ContentView,
    CartView,
    LogIn,
    favourites,
    // profileview,
  },
}
</script>