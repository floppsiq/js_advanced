class ProductList {

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.fetchProducts();
    this.render();
  }

  fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
	this.total();
  }
  total() {
	const block = document.querySelector('.products__sum');
	let totalPrice = 0;
	for (let good of this.goods) {
	  totalPrice += good.price;
	}
	//console.log(totalPrice);
	block.innerText = `Общая стоимость товаров: ${totalPrice} рублей`;
  }
}

class ProductItem {
  constructor(product, img = 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `
          <div class="product__item">
            <img class="product__img" src="${this.img}" alt="${this.title}" />
            <h3 class="product__title">${this.title}</h3>
            <p class="product__title">${this.price} \u20bd</p>
            <button data-id="${this.id}" class="btn btn__add">Добавить в корзину</button>
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

/*const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, id, img = 'https://liftshop24.ru/custom/custom31_07_2018_15_15/img/not-image.png') => {
  return `<div class="product__item">
            <img class="product__img" src="${img}" alt="" />
            <h3 class="product__title">${title}</h3>
            <p class="product__title">${price}</p>
            <button data-id="${id}" class="btn btn__add">Добавить в корзину</button>
          </div>`;
};

const renderProducts = list => {
  const productList = list.forEach((product) => renderProduct(product.title, product.price, product.id));
  // console.log(productList);
  document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);*/
