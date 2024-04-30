import {defineStore} from "pinia"; //makes the store

import products from "../data/products.json";

export const useProductStore = defineStore("ProductStore",{
    state:()=>{
        return{
            products:[],
        };
    },
    actions:{
        async fill(){
            this.products = (await import("@/data/products.json")).default
        },
    }


})