import {defineStore} from 'pinia';
import type {IProductList} from "@/models/ProductList";


export const useProductStore = defineStore('products', {
    state: () => {
        return {
            products: [] as IProductList[],
            product: null as IProductList | null,
        }
    },
    actions: {
        async fetchProductsList() {
            setTimeout(async () => {
                const response = await fetch("../../../db.json");
                const {data} = await response.json();
                this.products = data;
            }, 1500)
        }
    }
})



