<template>
    <v-container>
        <v-card>
            <v-card-title>Shopping Cart</v-card-title>
            <v-card-text>
                <p>Total Price: ${{ totalPrice }}</p>
                <v-list>
                    <v-list-item v-for="item in cartItems" :key="item.id">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.productId }}</v-list-item-title>
                            <v-list-item-subtitle>Quantity: {{ item.quantity }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon @click="removeFromCart(item.id)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<!-- <script>
import axios from 'axios';

export default {
    name:'CartView',
    data() {
        return {
            cartItems: [],
        };
    },
    async mounted() {
        await this.fetchCartData();
    },
    methods: {
        async fetchCartData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/carts');
                console.log('response', response);
                let productData = response.data.products; // Assuming the response has a products array
                this.cartItems = [...productData]
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        },
        removeFromCart(itemId) {
            // Implementation to remove item from cart
            this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        },
    },
    computed: {
        totalPrice() {
            return this.cartItems?.reduce((total, item) => total + item.product?.price * item.quantity, 0);
        },
    },
};
</script>

<style>
/* Add any custom styles here */
</style> --> -->

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cartItems: [],
        };
    },
    methods: {
        async getCartItems() {
            try {
                const response = await axios.get('https://fakestoreapi.com/carts');
                this.cartItems = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async removeFromCart(itemId) {
            try {
                const response = await axios.delete(`https://fakestoreapi.com/carts/${itemId}`);
                if (response.status === 200) {
                    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.getCartItems();
    },
};
</script>
  