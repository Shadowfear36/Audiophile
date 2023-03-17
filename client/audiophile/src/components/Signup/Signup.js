import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/user";
import './signup.css';

export default function Signup() {
  //set navigation 
  const navigate = useNavigate();

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  //<-----form State------>
  const initialFormState = {
    name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    age: 0,
    gender: 'M',
    user_type: 'DJ',
  }
  //initialize form state and index
  const [formState, setFormState] = useState(initialFormState);
  const [formIndex, setFormIndex] = useState(1);

  // handle form input Change
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

    //handle updating userState after successful login
    const handleUpdate = (obj) => {
        console.log('handleUpdate input:', obj);
        if (obj && obj.id) {
            setUserState({
                isLoggedIn: true,
                user_id: obj.id,
                page: 'home',
                name: obj.name,
                username: obj.username,
                email: obj.email,
                password_digest: obj.password_digest,
                user_type: obj.user_type,
                currentSong: [],
                queue: []
              })
              navigate('/home')
        } else {
            console.error("Invalid Object Fetched:", obj);
        }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"user":
        formState})
    }).then(res => res.json())
    .then(obj => handleUpdate(obj))
  }

  const displayForm = () => {
    if (formIndex === 1) {
      return form1 
    }

    if (formIndex === 2) {
      return form2
    }

    if (formIndex === 3) {
      return form3
    }
  };

  const handleType = (e) => {
    e.preventDefault();
    if (e.target.name === 'DJ') {
        setFormState({...formState, user_type: "DJ"});
    }

    if (e.target.name === 'Producer') {
      setFormState({...formState, user_type: "Producer"});
    }

    if (e.target.name === 'Artist') {
      setFormState({...formState, user_type: "Artist"});
    }
    else {
      setFormState({...formState, user_type: "DJ"});
    }
  };


  const form1 = <>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    <label for="username">Username</label>
                    <input type="text" name="username" value={formState.username} onChange={handleChange}/>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formState.email} onChange={handleChange}/>
                    <button onClick={() => setFormIndex(2)}>Next</button>
  </>

  const form2 = <>  
                    <div id="form2-top">
                      <div id="age-wrap">
                        <label for="age">Age</label>
                        <input id="num-inp" type="number" name="age" min={0} onChange={handleChange} value={formState.age} />
                      </div>
                      <div id="gen-wrap">
                        <label for="gender">Gender</label>
                        <select id="signup-sel" name="gender" onChange={handleChange} value={formState.gender}>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="">Prefer Not To Say</option>
                        </select>
                      </div>
                    </div>
                    <div id="btn-cluster">
                      <button name="DJ" onClick={handleType}>DJ</button>
                      <button id="btn-mid" name="Producer" onClick={handleType}>Producer</button>
                      <button name="Artist" onClick={handleType}>Artist</button>
                    </div>
                    <br/>
                    <div id="btn-cluster">
                      <button onClick={() => setFormIndex(1)}>Back</button>
                      <button onClick={() => setFormIndex(3)}>Next</button>
                    </div>
  </>

  const form3 = <>
                    <label required for="password">Password</label>
                    <input type="password" name="password" onChange={handleChange} value={formState.password}/>
                    <label for="password_confirmation">Confirm Password</label>
                    <input required type="password" name="password_confirmation" onChange={handleChange} value={formState.password_confirmation}/>
                    <button onClick={()=> setFormIndex(2)}>Back</button>
                    <button onClick={handleSubmit}>Submit</button>
  </>


  return (
    <div id="signup-container">
        <div id="login-bg">
            <h1 className="logo">AudioPhile</h1>
            <div id="signup-form-container">
                <h3>Sign Up</h3>
                <form id="signup-form">
                    {displayForm()}
                    <NavLink to="/"><h5>Already Have An Account? </h5></NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}
