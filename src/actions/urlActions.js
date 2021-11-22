

export const urlCreate = (data) => async (dispatch, getState) => {
   
    console.log(data)
    const {id, short} = data

  
   dispatch ({type:'Add To List',
       payload: { 
         id,
         url: short
         } })

        
       localStorage.setItem('urlItems', JSON.stringify(getState().url.urlItems))


  }

  export const urlFetch = (id) => async (dispatch, getState) => {
   
    
  console.log(id)
  const items = getState().url.urlItems
         console.log(items)
      const itemExist = items.find(i => i.id === id.id)
      console.log(itemExist)
       
  

   dispatch ({type:'Get List',
       payload: {itemExist} })

        
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