

export const urlCreate = (data) => async (dispatch, getState) => {
   
    const {id, short} = data

  
   dispatch ({type:'Add To List',
       payload: { 
         id,
         url: short
         } })

        
       localStorage.setItem('urlItems', JSON.stringify(getState().url.urlItems))


  }

  export const urlFetch = (id) => async (dispatch, getState) => {
   
 
      const items = getState().url.urlItems
      const itemExist = items.find(i => i.id === id.id)

      dispatch ({type:'Get List', payload: {itemExist} })

        
    //   var x = localStorage.getItem('urlItems', JSON.stringify(getState().url.urlItems))

      

        //    localStorage.setItem('urlList', x)

      
  }


//   export const removeItemCart = (id) => async (dispatch ,getState) => {
   
//     console.log(id)
   
//    dispatch({
//        type: 'DELETE',
//        payload: id
//    })

  

//    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

//    const we = JSON.stringify(getState().cart.cartItems)

//    console.log(we)
// }