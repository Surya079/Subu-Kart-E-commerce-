
export let cart = JSON.parse(localStorage.getItem('cart'));
 if (!cart){
    cart = [{
        productId:'jhqd9812h9dbd0d09wdd02n09d',
        Quantity:2,
        deliveryOptionId : '1'
    },{
        productId:'bwd98hr1i38r32iuf83rbigf',
        Quantity:1,
        deliveryOptionId : '2'
    }];
 }

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
};

export function addToCart(productId){
    let matchingitem;
        cart.forEach((cartItem)=>{
          if (productId === cartItem.productId){
            matchingitem = cartItem;
          }
        });
        if(matchingitem){
          matchingitem.Quantity += 1;
        }else{
            cart.push({
              productId : productId,
              Quantity : 1,
              deliveryOptionId :'1'
            });
        }
        saveToStorage();
  };
export  function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    
    saveToStorage();
  };
export function updateQuantity(productId,newQuantity){
      let matchingitem;
      cart.forEach((cartItem)=>{
        if (productId === cartItem.productId){
          matchingitem = cartItem;
        }
      });
      matchingitem.Quantity = newQuantity;
      saveToStorage();
};
  
export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingitem;

  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingitem = cartItem;
    }
  });
  matchingitem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
