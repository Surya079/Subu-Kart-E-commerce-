import { cart,addToCart } from "../data-script/cart.js";
import { product2 } from "../data-script/products.js";

  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');

    if (bar) {
      bar.addEventListener('click', () => {
        nav.classList.add('active')
      })
    
    if (close) {
      close.addEventListener('click', () => {
        nav.classList.remove('active')
      })
    }
   }

let productsHTML = '';
  
product2.forEach((product) =>{
    productsHTML += `
    <div class="pro" ">
    <img src="${product.image}" alt="">
    <div class="des">
      <span>${product.brand}</span>
      <h5>${product.name}</h5>
      <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>

      </div>
      <h4>$${(product.price/100).toFixed(2)}</h4>
    </div>
    <button  class="add-cart js-add-cart" data-product-id="${product.id}">Add<i class="fal fa-shopping-cart " ></i></button><span class="js-added-messege-${product.id} added-msg"><i class='bx bx-check-circle'></i>Added</span>
  </div>
    `;
});

document.querySelector('.js-products-grid-1').innerHTML = productsHTML;


const addedMessageTimeouts = {};


document.querySelectorAll('.js-add-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
      const {productId} =  button.dataset;
      
      addToCart(productId);
        
      addCartquantity();  

      const addMessege = document.querySelector(`.js-added-messege-${productId}`);

      addMessege.classList.add('added-to-cart-visible');

      setTimeout(()=>{
        const previousTimeoutId = addedMessageTimeouts[productId];
        if (previousTimeoutId){
          clearTimeout(previousTimeoutId);
        }

        const timeOutId = setTimeout(()=>{
          addMessege.classList.remove('added-to-cart-visible');
        },2000);

        addedMessageTimeouts[productId] = timeOutId;
        
      });
    });  
});
function addCartquantity(){
  let cartQuantity = 0;

        cart.forEach((cartItem)=>{
          cartQuantity += cartItem.Quantity;
        });      
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        document.querySelector('.js-cart-quantity-1').innerHTML = cartQuantity;
    };      
addCartquantity();
      
