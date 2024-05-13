import axios from "axios";
import {message} from 'antd'


// The userLogin function is an action creator that dispatches actions to log in a user.
// It makes an asynchronous request to the server to log in with the provided request object.
// Upon successful login, it stores the user data in local storage, displays a success message, waits for a short duration, and then redirects the user to the home page.

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('http://localhost:5000/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('http://localhost:5000/api/users/register' , reqObj)
        message.success('Registration successfull')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}