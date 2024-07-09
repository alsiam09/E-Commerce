import { createSlice } from '@reduxjs/toolkit'

export const prodectslice = createSlice({
  name: 'prodect',
  initialState: {
    CartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) :[],
  },
  reducers: {
    AddToCart: (state , Action) => {
      let FindProdect = state.CartItem.findIndex((item)=>item.id == Action.payload.id)

      if (FindProdect !== -1) {
        state.CartItem[FindProdect].qun += 1
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }else{
        state.CartItem = [...state.CartItem , Action.payload]
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }
    },
    qunIce: (state , action) =>{
      state.CartItem[action.payload].qun += 1
    },
    qunDce: (state , action) =>{
      if (state.CartItem[action.payload].qun > 1) {   
        state.CartItem[action.payload].qun -= 1
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }else{
             

      }

    },
    ProRem:(state ,action) =>{
      state.CartItem.splice(action.payload , 1)
      localStorage.setItem("cart" , JSON.stringify(state.CartItem))        
    }


  }
})

// Action creators are generated for each case reducer function
export const { AddToCart , qunIce , qunDce , ProRem} = prodectslice.actions

export default prodectslice.reducer