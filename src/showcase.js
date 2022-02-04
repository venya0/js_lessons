const $showcase = document.querySelector('.shop');

const renderGoodsItem = ({ title, price }) => {
  return `<div class="product"><div class="photo"></div><div class="description"><p class="text">${title}</p><p class="price">${price}$</p></div><div class="add-cart"><a href="#" class="add"><i class="fas fa-cart-plus"></i><p class="add-to-cart">Add to cart</p></a></div></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList 