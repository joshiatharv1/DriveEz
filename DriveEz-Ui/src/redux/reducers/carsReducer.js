const initialData = {
    cars : [],

};

// The carsReducer function manages the state related to cars. It responds to the 'GET_ALL_CARS' action type by updating the cars property in the state with the data provided in the action payload.

export const carsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_CARS' : {
             return{
                 ...state,
                 cars : action.payload
             }
         }
         
         default:return state
     }

}

