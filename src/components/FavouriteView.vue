<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-card>
                            <v-card-title>
                                <h1>Favourites</h1>
                            </v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item v-for="(item, index) in wishlist" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title>{{ item }}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn color="red" @click="removeFromWishlist(index)">Remove</v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                                <v-text-field v-model="newItem" label="Add to wishlist"></v-text-field>
                                <v-btn color="primary" @click="addToWishlist">Add</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    'name':'favourites',
    data() {
        return {
            newItem: '',
            wishlist: ['Item 1', 'Item 2', 'Item 3'],
        };
    },
    methods: {
        addToWishlist() {
            if (this.newItem) {
                this.wishlist.push(this.newItem);
                this.newItem = '';
            }
        },
        removeFromWishlist(index) {
            this.wishlist.splice(index, 1);
        },
    },
};
</script>
  

<!-- <script>
export default {
  name: "favourites",


  data: () => ({
    //
  }),
}
</script> -->