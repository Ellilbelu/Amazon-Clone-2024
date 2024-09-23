
import {Type} from './action.type'

export const initialState = {
    basket:[],
    user: null
}


export const reducer = (state,action)=>{
    switch (action.type) {

        //add item to the basket
        case Type.ADD_TO_BASKET:
            // check if the item exists

            const existingItem = state.basket.find((item)=>item.id === action.item.id)
            if(!existingItem){
                return {
                    ...state,
                    basket : [...state.basket,{...action.item, amount:1}]
                }
            }else{
                const updateBasket = state.basket.map((item)=>(
                    item.id === action.item.id? {...item,amount:item.amount + 1} : item
                ))

                return{
                    ...state,
                    basket : updateBasket
                }
            }

         //to remove items from the basket
            case Type.REMOVE_FROM_BASKET :
                const index = state.basket.findIndex(item=> item.id===action.id)
                let newBasket = [...state.basket]

                if(index >=0){
                    if(newBasket[index].amount > 1){
                        newBasket[index] = {...newBasket[index],amount:newBasket[index].amount-1}
                    }else{
                        newBasket.splice(index,1)
                    } 
                }

                 return {
                   ...state,
                   basket: newBasket,
                 }
    // to sign up new user

                case Type.SET_USER:
                    return {
                        ...state,
                        user: action.user,
                    }
        default:
            return state;
    }
}