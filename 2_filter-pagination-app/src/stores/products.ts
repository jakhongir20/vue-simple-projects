import {defineStore} from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => {
        return {
            products: [] as ProductsList[],
            product: null as ProductsList | null,
        }
    },
    actions: {
        async fetchProductsList() {
            setTimeout(async () => {
                const response = await fetch("../db.json");
                const {data} = await response.json();
                this.products = data;
            }, 1500)
        }
    }
})

interface ProductsList {
    id: number
    artNumber: number
    name: string
    brand: string
    weight: number
    quantity: number
    price: number
}

