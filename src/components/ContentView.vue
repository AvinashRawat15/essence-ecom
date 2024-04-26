<template>
    <v-app>
        <v-main>
            <v-container>
                <!-- Display products as cards -->
                <v-row>
                    <v-col v-for="product in products" :key="product.id" cols="12" md="3">
                        <v-card>
                            <v-img :src="product.image" height="200"></v-img>
                            <v-card-title>{{ product.title }}</v-card-title>
                            <v-card-subtitle>Price: ${{ product.price }}</v-card-subtitle>
                            <v-btn class="ma-2" color="orange-darken-2" @click="goToCart">
                                <v-icon icon="mdi-cart" start></v-icon>
                                Add To Cart
                            </v-btn>
                            <v-btn class="ma-2" color="red">
                                <v-icon icon="mdi-credit-card" start></v-icon>
                                Buy Now
                            </v-btn>
                            <v-btn @click="addToWishlist" class="ma-2" color="pink" size="small" icon="mdi-heart"
                                to="/favourites"></v-btn>
                            <v-card-text>{{ product.description }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            this.products = response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    methods: {
        goToCart() {
            this.$router.push('/CartView');
        },
        addToWishlist() {
            if (this.product) {
                this.favourites.push(this.product);
                this.newproduct = '';
            }
        },
    }
};
</script>
  