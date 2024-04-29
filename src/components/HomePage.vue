<template>
    <div>
        <v-carousel>
            <v-carousel-item src="../assets/images/fashion-collection-design-shopping-graphic-words.jpg" ></v-carousel-item>

            <v-carousel-item src="../assets/images/happy-woman-near-shopping-bags-talking-by-phone.jpg"></v-carousel-item>

            <v-carousel-item src="../assets/images/purchase-sale-discount-fashion-style.jpg" ></v-carousel-item>

            <v-carousel-item src="../assets/images/Screenshot 2024-04-26 160638.jpg" ></v-carousel-item>

            <v-carousel-item src="../assets/images/Screenshot 2024-04-26 160731.png" ></v-carousel-item>
        </v-carousel>
        <ContentView />
    </div>
</template>
  
<script>
import ContentView from './ContentView.vue';
export default {
    name: 'HomePage',
    // components:"AboutView"
};
</script>
  