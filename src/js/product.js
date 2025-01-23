
import { findProductById } from "./productData.mjs";
import { setLocalStorage, getParam } from './utils.mjs';

const productId = getParam('product');

console.log(findProductById(productId));


