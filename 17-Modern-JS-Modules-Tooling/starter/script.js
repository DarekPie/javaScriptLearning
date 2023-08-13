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



