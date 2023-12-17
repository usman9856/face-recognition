import React, { useState } from 'react';
import FlipCard from './flipcard';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // let result = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:5000/register`, {
    //   method: "POST",
    //   body: JSON.stringify({ email, password, first_name, last_name, phone_number, age, role, address }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // result = await result.json();
    // console.warn(result);
    // if (result.error) {
    //   alert(result.error);
    // } else if (result.message) {
    //   alert(result.message);
    //   navigate('/login');
    // } else {
    //   navigate('/login');
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <FlipCard
          frontContent={
            <div>
              <input
                className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          }
          backContent={<div>
            <input
              className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
              required
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
              required
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
              required
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
              required
              type="tel"
              placeholder="Phone Number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className='input-box mb-4 px-3 py-2 border border-gray-300 rounded w-full'
              required
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
              type='submit'
            >
              Sign Up
            </button>
          </div>}
        />
      </form>
    </div>
  );
};

export default Signup;
