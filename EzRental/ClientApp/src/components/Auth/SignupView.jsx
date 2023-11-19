import React, { useState } from "react";
import axios from "axios";

export default function SignupView()
{
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const handleRegistration = async(e) => {
    e.preventDefault();
    if(!userName || !password || !email || !confirmPassword)
    {
      console.log("Bad")
      return
    }
    if(confirmPassword !== password)
    {
      console.log('Bad Password')
      return
    }

    const formData = {

        "credentials": {
            "username": userName,
            "password": password
        },

        "user": {
            "firstName": "Umair",
            "lastName": "Bawlin",
            "Address": "Your MOM",
            "phoneNumber": "002111",
            "email": email
        }
      
    }

    try
    {
        const response = await axios.post('http://localhost:44486/session/signup', formData)
        console.log(response)
        alert(response.data.message)
    }
    catch(error)
    {
      if(error.response)
      {
        alert(error.response.data.message)
      }
      else
      {
        console.log(error)
      }
    }
  }

  return(
    <div className="bg-indigo-900 flex justify-center items-center h-screen px-10">
      <form 
        className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-1/3 h-128"
        onSubmit={handleRegistration}>
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Sign up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input 
            placeholder="Username" 
            type="text" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" />
        </div >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            placeholder="Email" 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            placeholder="Password" 
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input 
            placeholder="Confirm Password" 
            type="password" 
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500" />
        </div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button> 
      </form>
    </div>
  )
}