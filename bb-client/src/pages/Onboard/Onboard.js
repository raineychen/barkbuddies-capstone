import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Onboard() {
    // const [cookies, setCookie, removeCookie] = useCookies(null)
    const [SignUp, setSignUp] = useState({
        // user_id:cookies.UserId,
        name:"",
        age:"",
        pet_name:"",
        pet_gender:"",
        url:"",
        email:"",
        vaccination:"",
        matches:[]
    })

    let navigate =useNavigate()
    const handleSubmit = (e) => {
        console.log('submitted');
        e.preventDefault();
      
        axios
          .put('http://localhost:8080/user', { SignUp })
          .then((response) => {
            console.log(response);
            const success = response.status === 200;
            if (success) navigate('/dashboard');
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
    return(
        <div></div>
    )
}

export default Onboard;