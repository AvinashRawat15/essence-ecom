<template>
    <div>
        <!-- <h1>Essence</h1> -->
        <v-carousel>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
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
  