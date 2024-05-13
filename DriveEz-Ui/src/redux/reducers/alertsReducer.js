const initialData = {
    loading : false
};

// The alertsReducer function manages the state related to loading alerts. It responds to the 'LOADING' action type by updating the loading property in the state with the provided payload.

export const alertsReducer=(state=initialData , action)=>{

    switch(action.type)
    {
          case 'LOADING' : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}