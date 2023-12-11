import {cart,removeFromCart,updateQuantity,updateDeliveryOption} from '../cart.js';
import { getProduct } from '../products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions,getdeliveryOption} from '../../data-script/delivery-option.js';
import { renderPaymentSummary } from './payment-summary.js';

export function renderOrderSummary(){

    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);
        

        const deliveryOptionId = cartItem.deliveryOptionId;

        const deliveryOption = getdeliveryOption(deliveryOptionId);
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
        const dateString = deliveryDate.format('dddd,MMMM D');
        cartSummaryHTML +=`
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <span class="product-brand">${matchingProduct.brand}<span>
            <div class="product-price">
              $${(matchingProduct.price/100).toFixed(2)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label js-Quantity-${matchingProduct.id}">${cartItem.Quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-quantity" data-product-id="${matchingProduct.id}">
                Update 
              </span>
              <input class="quantity-input js-input-Quantity-${matchingProduct.id}">
              <span class="save-quantity-link link-primary js-save-Quantity-link" data-product-id="${matchingProduct.id}">Save</span>
              <span class="delete-quantity-link link-primary js-delete-quantity" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
          ${deliveryOptionHtml(matchingProduct,cartItem)}
          </div>
        </div>
      </div>`;
    });

    function deliveryOptionHtml(matchingProduct,cartItem){
      let html ='';
      deliveryOptions.forEach((deliveryOption)=>{
        const today = dayjs();
        const deliveryDate = today.add(
          deliveryOption.deliveryDays,'days'
        );
        const dateString = deliveryDate.format('dddd,MMMM D');

        const priceString = deliveryOption.price === 0 ? 'FREE' : `${(deliveryOption.price/100).toFixed(2)} -`
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      
        html += `
          <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
              ${isChecked ? 'checked' : ''}
              class="delivery-option-input"
              name="delivery-option-1-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                $${priceString} Shipping
              </div>
            </div>
          </div>

        `;
      });
      return html;
    };



    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
    document.querySelectorAll('.js-delete-quantity').forEach((link)=>{
        link.addEventListener('click',()=>{
            const productId = link.dataset.productId;
            removeFromCart(productId);
            
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
            updateCartQuantity();
            renderPaymentSummary();
        });
    });
   
    function updateCartQuantity(){
      let cartQuantity = 0;
      cart.forEach((cartItem)=>{
        cartQuantity += cartItem.Quantity;
      })
      const cartquantity = document.querySelector('.js-checkout-link').innerHTML = `${cartQuantity} items`;
      
    };

    updateCartQuantity();

    document.querySelectorAll('.js-update-quantity').forEach((link)=>{
      link.addEventListener('click',()=>{
        const {productId} = link.dataset;
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.classList.add('is-editing-quantity');
        
      });
    });


    document.querySelectorAll('.js-save-Quantity-link').forEach((link)=>{
      link.addEventListener('click',()=>{
        const {productId} = link.dataset;
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        const QuantityInput = document.querySelector(`.js-input-Quantity-${productId}`);
        const newQuantity = Number(QuantityInput.value);
        if(newQuantity == 0){
          alert("Quantity must be at least 0 and less than 1000");
          return;
        }
        updateQuantity(productId,newQuantity);
        const QuantityLabel = document.querySelector(`.js-Quantity-${productId}`);
        container.classList.remove('is-editing-quantity');
        QuantityLabel.innerHTML = newQuantity;
        
        updateCartQuantity();
        renderPaymentSummary();
      });
    });
    updateCartQuantity();

    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
      element.addEventListener('click',()=>{
        const {productId,deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId,deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
};
