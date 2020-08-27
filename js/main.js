const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         // window.ActiveXObject -> xhr = new ActiveXObject()
//         xhr.open("GET", url, true);
//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4){
//                 if(xhr.status !== 200){
//                     reject('Error');
//                 } else {
//                     resolve(xhr.responseText);
//                 }
//             }
//         };
//         xhr.send();
//     })
// };
//
// getRequest('tel.json').then(data => {
//
// })

class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];
    // this.#fetchGoods();
    this.#getProducts()
        .then(data => {
          this.#goods = [...data];
          this.#render();
        });
  }

  // #fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //   });
  // }
  #getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        });
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  getGoodsPrice() {
    return this.#goods.reduce((sumPrice, { price }) => sumPrice + price, 0);
  }
}

class ProductItem {
  constructor(product, img='https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
  }

  render() {
    return `
          <div class="product__item">
            <img class="product__img" src="${this.img}" alt="${this.product_name}" />
            <h3 class="product__title">${this.product_name}</h3>
            <p class="product__price">${this.price} \u20bd</p>
            <button class="btn btn__add"
					data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Добавить в корзину</button>
          </div>`;
  }
}

const list = new ProductList();

class Cart {
    constructor () {
        
    }
     //метод добавления товара в корзину
    addCartItem(cartItem) {
        
    }
	
	//метод удаления товара из корзины
    removeCartItem(cartItem) {
        
    }
    //метод для вывода итоговой суммы корзины
    totalCartPrice() {
        
    }

    render() {
        
    }
}
	class CartItem extends ProductItem {
    constructor() {
	  //по идее это тот же класс, что продукт, возможно потребуются дополнительные свойства
	  //например ссылка на товар или кол-во товаров
    }
	
	render() {
        
    }
} 
//const products = [
//  {id: 1, title: 'Notebook', price: 20000},
//  {id: 2, title: 'Mouse', price: 1500},
//  {id: 3, title: 'Keyboard', price: 5000},
//  {id: 4, title: 'Gamepad', price: 4500},
//];
//
//const renderProduct = (title, price, id, img = 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png') => {
//  return `<div class="product__item">
//            <img class="product__img" src="${img}" alt="" />
//            <h3 class="product__title">${title}</h3>
//            <p class="product__title">${price}</p>
//            <button data-id="${id}" class="btn btn__add">Добавить в корзину</button>
//          </div>`;
//};
//
//const renderProducts = list => {
//  const productList = list.forEach((product) => renderProduct(product.title, product.price, product.id));
//  // console.log(productList);
//  document.querySelector('.products').innerHTML = productList.join('');
//}
//
//renderProducts(products);