import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'https://iproject-4k.herokuapp.com/'
export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        brands: [],
        products: [],
        productDetail: '',
        isLoading: false,
        imageBox: ''
    }),
    getters: {

    },
    actions: {
        async fetchBrands() {
            try {
                const { data } = await axios.get(baseUrl + 'products/brands')
                this.brands = data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchProducts(page, brands) {
            try {
                let url = baseUrl + 'products/sneakers?page=0'
                if (page) {
                    url = baseUrl + 'products/sneakers?page=' + page
                }
                if (brands) {
                    console.log('masuk')
                    url += `&query=${brands}`
                }
                const { data } = await axios.get(url)
                this.products = data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchProductDetail(id) {
            this.isLoading = true
            console.log('is loading true')
            try {
                const { data } = await axios.get(baseUrl + `products/sneakers/${id}`)
                this.productDetail = data
                this.imageBox = data.image.original
                    // console.log(data[0].image.original)
                console.log('success')
            } catch (err) {
                console.log(err)
            } finally {
                this.isLoading = false
                console.log('is loading false')
            }
        }
    }
})