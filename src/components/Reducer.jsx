const Reducer = (state,action) => {
  if (action.type==="REMOVE_ITEM"){
       return{
           ...state,item:state.item.filter(carr=>carr.id !==action.payload)
       }
  }
    if(action.type==="CLEAR_CART"){
        return {...state,item:[]}
    }

     if (action.type==="INCREMENT") {
         const updatedCart=state.item.map((carrE)=>{
             if (carrE.id===action.payload) {
                 return {...carrE,quantity:carrE.quantity+1}
             }
             return carrE;
         });
         return{...state,item:updatedCart}
     }

    if (action.type==="DECREMENT") {
        const updatedCart=state.item.map((carrE)=>{
            if (carrE.id===action.payload) {
                return {...carrE,quantity:carrE.quantity-1}
            }
            return carrE
        }).filter(ele=>ele.quantity!==0)
        return {...state,item:updatedCart}
     }

    if (action.type==="GET_TOTAL") {
        let {totalItems,totalAmount}=state.item.reduce(
            (acc,cur)=>{
            let {price,quantity}=cur;
            let updatetotalamount=price*quantity
            acc.totalAmount+=updatetotalamount
            acc.totalItems+= quantity;
            return acc;
        },
        {
            totalItems:0,
            totalAmount:0
        }
    );
    return{...state,totalItems,totalAmount}
    
}

           return state;
    
}

export default Reducer
