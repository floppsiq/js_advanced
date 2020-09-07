Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png',
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
<div>
            <button class="btn__cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart__block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart__item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
</div>`
});
Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart__item">
                    <div class="product__bio">
                        <img :src="img" alt="Some image">
                        <div class="product__desc">
                            <p class="product__title">{{cartItem.product_name}}</p>
                            <p class="product__quantity">Количество: {{cartItem.quantity}}</p>
                            <p class="product__single-price">$ {{cartItem.price}} за шт</p>
                        </div>
                    </div>
                    <div class="right__block">
                        <p class="product__price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="btn btn__del" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
});