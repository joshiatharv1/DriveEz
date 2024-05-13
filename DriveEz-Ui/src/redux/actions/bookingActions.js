import axios from "axios";
import { message } from "antd";

// The bookCar function is an action creator that dispatches actions to book a car.
// It makes an asynchronous request to the server to book a car with the provided request object.
// Upon successful booking, it displays a success message, waits for a short duration, and then redirects the user to the userbookings page.


export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post("http://localhost:5000/api/bookings/bookcar" , reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your car booked successfully");
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const getAllBookings=()=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await axios.get('http://localhost:5000/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}