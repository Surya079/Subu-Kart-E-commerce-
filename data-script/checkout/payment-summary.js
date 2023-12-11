import  {cart} from '../cart.js';
import {getProduct } from '../products.js';
import { getdeliveryOption } from '../delivery-option.js';


export function renderPaymentSummary(){
  


  let productPrice = 0;
  let ShippingPrice = 0;
  let ProductName;
     cart.forEach((cartItem) => {
       const product =   getProduct(cartItem.productId);
       productPrice +=  product.price * cartItem.Quantity;

       const deliveryOption = getdeliveryOption(cartItem.deliveryOptionId);
       ShippingPrice += deliveryOption.price;
       ProductName = product.name;
     });
      


      const totalBeforeTaxPrice = productPrice + ShippingPrice;

      const TaxPrice = totalBeforeTaxPrice * 0.1;
      const toatlPrice = totalBeforeTaxPrice + TaxPrice;

      const renderPaymentSummaryHTML =   `
      <div class="payment-summary-title">
      Order Summary
    </div>
 
    <div class="payment-summary-row">
      <div class="js-update-Quantity">$:</div>
      <div class="payment-summary-money">$${(productPrice/100).toFixed(2)}</div>
    </div>
 
    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${(ShippingPrice/100).toFixed(2)}</div>
    </div>
 
    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${(totalBeforeTaxPrice/100).toFixed(2)}</div>
    </div>
 
    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${(TaxPrice/100).toFixed(2)}</div>
    </div>
 
    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${(toatlPrice/100).toFixed(2)}</div>
    </div>
     
    <button class="place-order-button button-primary js-order-button" data-bs-toggle="offcanvas" data-bs-target="#placed"  type="button">
      Place your order
    </button><div class="js-warning warning-order">Please Add to the products </div>

     
      
      `;
      document.querySelector('.js-payment-summary').innerHTML = renderPaymentSummaryHTML;
      updateCartQuantity();

      document.querySelector('.js-order-button').addEventListener('click',function(){
        warinigSelectProduct(ProductName,toatlPrice);
        
      });
      
};
function warinigSelectProduct(ProductName,toatlPrice){
      if (updateCartQuantity()!=0){
        alert(`
                  Product Name : ${ProductName}   \n
                  Total Price : $${(toatlPrice/100).toFixed(2)} \n
                  Congratulations! 🎉 ✨✨Your order Placed
              `);
      }else{
        let orderButton =  document.querySelector('.js-order-button');
        let warningMessege = document.querySelector('.js-warning');
        
        orderButton.classList.add('shake');
        warningMessege.classList.add('warning-order-visible');
        // setTimeout(function(){
        //   warningMessege.remove('warning-order-visible');
        // },1000) 
        // warningMessege.add('warning-order-visible');
      }    
    ;
};


function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem)=>{
    cartQuantity += cartItem.Quantity;
  })
   document.querySelector('.js-update-Quantity').innerHTML = `items(${cartQuantity})`;
  return cartQuantity
};









   
       
