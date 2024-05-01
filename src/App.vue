<template>
  <v-app>
    <HeaderView />
    <router-view />
    <ContentView v-for="product in []"
    :key="product.name"
    :product="product"/>
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
// import {useProductStore} from "./stores/ProductStore"
import {storeToRefs} from 'pinia';
// import products from "@/data/products.json";
// const {products} = storeToRefs(useProductStore());
// productStore.fill();

export default {
  name: 'App',

  components: {
    // HeaderView,
    // FooterView,
    // ContentView,
    CartView,
    LogIn,
    favourites,
    // profileview,
  },
}
</script>