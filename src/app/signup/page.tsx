"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Ig from '../../../public/Instagram Logo.png';
import Link from 'next/link';
// import Icon from '../../../public/Icon.png'
import  axios  from 'axios'
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast'

export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [disabled, setDisabled] = useState(true);
  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup Succesfull", response.data)
      router.push('/login')

    } catch (error) {
      if (error instanceof Error) {
        console.log("Signup Failed")
              toast.error(error.message)
      } else {
          throw new Error("An unknown error occurred");
      }
 
}
  }

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0 && user.email.length > 0){
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [user])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div>
        <Image src={Ig} alt="Instagram Logo" width={200} height={200} />
      </div>
      <div className='text-center mt-5 m-3 gap-3 flex flex-col w-full p-3 '>
        <input type="username" placeholder='Username' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} className='p-3 bg-[#121212] outline-none' />
        <input type="password" placeholder='Email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className='p-3 bg-[#121212] outline-none' />
        <input type="password" placeholder='Password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className='p-3 bg-[#121212] outline-none' />
      </div>
      {/* <div className='flex justify-end w-full px-3'>
        <Link href="/signup" className='text-[#3797EF] '>Forgot password?</Link>
      </div> */}
      <div className='text-center m-1 gap-3 flex flex-col w-full p-3'>
        <button onClick={onSignup} className='bg-[#3797EF] p-3'>{disabled ? "Fill up the form first" : "Create Account"}</button>
      </div>
      {/* <div className='flex gap-2 mt-5'>
        <Image src={Icon} alt='Facebook' className='text-xs' width={15} height={5}/>
        <Link href="www.Facebook.com" className='text-[#3797EF] '>Log in with Facebook</Link>
      </div> */}
      <p className='opacity-60 text-sm mt-8 font-normal'>OR</p>
      <div className='flex mt-8 gap-1'>
        <p className='opacity-60'>Already have an account?</p>
        <Link className='text-[#3797EF] ' href="/login">Log In</Link>
      </div>
    </div>
  );
}
