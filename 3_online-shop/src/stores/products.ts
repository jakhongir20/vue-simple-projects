import {defineStore} from 'pinia';
import axios from "axios";

export const useProductStore = defineStore('products', {
    state: () => {
        return {
            products: [] as ProductsList[],
            product: null as ProductsList | null,
            loading: false
        }
    },
    actions: {
        async fetchProductsList() {
            try {
                this.loading = true;
                const {data} = await axios('/api/product/admin/products');
                this.products = data;
                const response = await fetch('https://fakestoreapi.com/products');
                const dt = await response.json();
            } catch (err) {
                console.error('Error: ', err)
            } finally {
                this.loading = false;
            }
        },
        async fetchGetProductById(id: string) {
            try {
                this.loading = true;
                const {data} = await axios(`/api/product/admin/product/${id}`);
                this.product = data;
            } catch (err) {
                console.error('Error: ', err);
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {
        getProduct: (state) => state.product
    }
})

interface ProductsList {
    id: number
    title: string
    category: string
    imageUrl: string
    description: string
    reviews: [object]
    price: number
    rate: number
    views: number
}

