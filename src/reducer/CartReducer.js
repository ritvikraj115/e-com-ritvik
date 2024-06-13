const cartReducer = (state, action) => {
  if(action.type==='REMOVE_FROM_CART'){
    let updatedCart=state.cart.filter(
      (curElm)=> curElm.id!==action.payload.id
    )
    console.log(updatedCart)
    let removed_product=state.cart.filter(
      (curElm)=> curElm.id===action.payload.id
    )
    console.log(removed_product)
    let total_price=removed_product[0].amount*removed_product[0].price
    total_price=(state.total_price>0)?total_price:0;
    return{
      ...state,
      total_item:state.total_item-1,
      total_price:state.total_price-total_price,

      cart:updatedCart,
    }
  }
    if(action.type==='ADD_TO_CART'){
        let { id, amount, product } = action.payload;
        const total_price=state.total_price;
        const total_item=state.total_item;
        console.log(action.payload)
        let existingProduct = state.cart.find(
            (curItem) => curItem.id === id
          );
          if(existingProduct){
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === id) {
                  let newAmount = curElem.amount + amount;
                  console.log(curElem.price)
                  console.log(newAmount)
                  console.log(total_price)
        
                  if (newAmount >= curElem.max) {
                    newAmount = curElem.max;
                  }
                  return {
                    ...curElem,
                    amount: newAmount,
                  };
                } else {
                  return curElem;
                }
              });
              return {
                ...state,
                total_price:total_price+updatedProduct[0].price,
                cart: updatedProduct,
              };
              
            }

          
          else {
            let cartProduct = {
              id: id,
              name: product.name,
              amount,
              image: product.image[0].url,
              price: product.price,
              max: product.stock,
            }
            console.log(cartProduct)
          return{
              ...state,
              total_price:total_price+cartProduct.price,
              total_item:total_item+1,
              cart:[...state.cart,cartProduct],
          }
            
          }
         
    }
    return state
}

export default cartReducer