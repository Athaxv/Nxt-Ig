import React from 'react';
import Image from 'next/image';
import Ig from '../../../public/Instagram Logo.png';
import Link from 'next/link';
import Icon from '../../../public/Icon.png'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div>
        <Image src={Ig} alt="Instagram Logo" width={200} height={200} />
      </div>
      <div className='text-center m-3 mt-5 gap-3 flex flex-col w-full p-3 '>
        <input type="username" placeholder='Phone number, email, username' className='p-3 bg-[#121212] outline-none' />
        <input type="password" placeholder='Password' className='p-3 bg-[#121212] outline-none' />
      </div>
      <div className='flex justify-end w-full px-3'>
        <Link href="/signup" className='text-[#3797EF] '>Forgot password?</Link>
      </div>
      <div className='text-center m-3 gap-3 flex flex-col w-full p-3'>
        <button className='bg-[#3797EF] p-3'>Log in</button>
      </div>
      <div className='flex gap-2 mt-5'>
        <Image src={Icon} alt='Facebook' className='text-xs' width={15} height={5}/>
        <Link href="www.Facebook.com" className='text-[#3797EF] '>Log in with Facebook</Link>
      </div>
      <p className='opacity-60 text-sm mt-10 font-normal'>OR</p>
      <div className='flex mt-8 gap-1'>
        <p className='opacity-60'>Don't have an account?</p>
        <Link className='text-[#3797EF] ' href="/signup">Sign up</Link>
      </div>
    </div>
  );
}
