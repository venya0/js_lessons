import { random } from "lodash";

const PRODUCTS = [
    'Sneakers',
    'Shirt',
    'Jeans',
    'Sweater'
]

const COLORS = [
    'green',
    'blue',
    'orange',
    'black'
]

let lastIndex = 0;

function getProductName() {
  const product = PRODUCTS[random(0, PRODUCTS.length - 1)]
  const color = COLORS[random(0, COLORS.length - 1)]
  return `${product} ${color}`;
}

function getProduct() {
    return {
      id: ++lastIndex,
      title: getProductName(),
      price: random(99, 999)
    }
}

function getProductList(count) {
  let products = [];
  
  for(let i = 0; i < count; i++) {
      products.push(getProduct());
    }
  console.log(JSON.stringify(products))

  return products
}

export default getProductList;