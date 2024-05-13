const initialData = {
    bookings : [],

};

// The bookingsReducer function manages the state related to bookings. It responds to the 'GET_ALL_BOOKINGS' action type by updating the bookings property in the state with the data provided in the action payload.

export const bookingsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_BOOKINGS' : {
             return{
                 ...state,
                 bookings : action.payload
             }
         }
         
         default:return state
     }

}
