/*
//Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(shippingCost);//indefined 
// addToCart('bread', 5);
// console.log(price, tq );

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, {cart} from './shoppingCart.js';
add('pizza',2);
add('asdsad',3);
add('332432',4);

console.log(cart);    // z cart robi sie tablica!



////////////////////////////////////////////
// Async await ES6 2022
//////////////////////////


// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const ShoppingCart2 = (function(){
  const cart = [];
  const shippingCost = 10;
  const totalPrice  = 237
  const totalQuantity = 23;

  const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} ${quantity} addes to cart`);
  };

  const orderStock = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} ${quantity} ordered from suplier`);
  };

  return{
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

ShoppingCart2.addToCart('apple', 4); 
ShoppingCart2.addToCart('pizza', 2); 
console.log(ShoppingCart2);

*/

////////////////////////////////////////////////////////////////////
//Comon JS module
//////////////////////////////////////////////////////////////////////////////////////

//Export
