const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png',
        imgCatalogSmall: 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png',
        filteredGoods: [],
        searchLine: '',
        isVisible: false

    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.id_product);
        },
        FilterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.products.filter(product => {
                return regexp.test(product.product_name);
            });
        }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filteredGoods.push(el)
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filteredGoods.push(el)
                }
            })


    },
    computed: {
        divClasses() {
            return {
                invisible: !this.isVisible,
                '': this.isVisible
            }
        }
    }
})