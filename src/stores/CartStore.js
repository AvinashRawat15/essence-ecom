import { defineStore } from "pinia";
export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            products: [],
        };
    },
    getters: {
        count() {
            return this.products.length
        },
        isEmpty() {
            return !this.products.length
        }
    },
    actions: {
        async addToCart(count, product) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.product.push({ ...product });
            }
        },
        async removeFromCart(product) {
                this.products = this.products.filter(p => p.id !== product.id);
            },
        async clearCart() {
                this.products = [];
            },
        },
    })

// actions:{
//     addItems(count,item){
//         count=parseInt(count);
//         for(let index=0; index<count;index++) {
//             this.items.push({...item});
//         }
//     }
// }