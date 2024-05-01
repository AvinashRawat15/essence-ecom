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
  
<script>
import { useCartStore } from '@/stores/CartStore';
export default {
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
};
</script>
