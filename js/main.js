const products = [
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
  const productList = list.map((product) => {
      return renderProduct(product.title, product.price, product.id);
  });
  // console.log(productList);
  document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);
