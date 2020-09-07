const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
    }
})

/*const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png',
        imgCatalogSmall: 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png',
        filteredGoods: [],
        searchLine: '',
        isVisible: false

*/