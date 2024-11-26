import React, { useEffect } from 'react';
import Image from 'next/image';
import BackArrorw from '../../../public/Back Arrow.png';
// import bell from '../../../public/Bell Icon.png';
import options from '../../../public/options.png';
import '@fontsource/roboto';
import { faBell as faBellRegular } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  bg  from '../../../public/Avatar.png'
import vector from '../../../public/Vector 2.png'
import circle from '../../../public/Ellipse 5.png'
import photos from '../../../public/photos.png'
import tags from '../../../public/tags.png'
import Rectangle from '../../../public/Rectangle 11.png'
// import router from 'next/navigation';
// import axios from 'axios';

export default function Page() {
  // const router = useRouter();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.post('/api/users/profile')
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
    <div className='p-5 mt-5'>
      <div className='flex justify-between items-center h-[35px]'>
        <div className='flex gap-8 items-center'>
          <Image src={BackArrorw} alt='back' width={30} height={25}/>
          <p className='font-roboto font-medium text-xl'>username</p>
        </div>
        <div className='flex h-[35px] gap-7'>
          {/* <Image src={bell} alt='bell' width={24} height={20}/> */}
          <FontAwesomeIcon icon={faBellRegular}  />
          <Image src={options} alt='options' className='text-sm' width={7} height={2}/>
        </div>
      </div>

      <div className='mt-7 flex items-center gap-10'>
        <div>
            <Image src={bg} alt='red' height={100} width={100}/>
        </div>
        <div className='flex gap-7'>
        <div>
            <p className='text-center font-medium text-2xl'>69</p>
            <h1 className='text-sm'>Posts</h1>
        </div>
        <div>
        <p className='text-center font-medium text-2xl'>18K</p>
        <h1 className='text-sm'>Followers</h1>
        </div>
        <div>
        <p className='text-center font-medium text-2xl'>184</p>
        <h1 className='text-sm'>Following</h1>
        </div>
        </div>
      </div>

      <div className='mt-2'>
        <p className='font-semibold'>user_name</p>
        <p className='opacity-50'>Local Business</p>
        <p>Brand Name</p>
        <p className='text-[#D4E0ED]'>www.Athaxv.in</p>
      </div>

      <div className='flex mt-5 gap-2'>
        <button className='w-[100px] rounded-md bg-[#3797EF] h-[45px]'>Follow</button>
        <button className='w-[100px] rounded-md border border-[#343434] font-medium h-[45px]'>Message</button>
        <button className='w-[100px] rounded-md border border-[#343434] font-medium  h-[45px]'>Email</button>
        <button className='w-[40px] items-center justify-center flex rounded-md border border-[#343434]'><Image src={vector} alt='aro'/></button>
      </div>

      <div className='mt-5 flex gap-5'>
        <div className='w-[80px]'>
        <Image src={circle} alt='circle' className='border border-[#505050] rounded-full p-1' height={80} width={80}/>
        <p className='text-center'>HighLight</p>
        </div>
        <div className='w-[80px]'>
        <Image src={circle} alt='circle' className='border border-[#505050] rounded-full p-1' height={80} width={80}/>
        <p className='text-center'>HighLight</p>
        </div>
        <div className='w-[80px]'>
        <Image src={circle} alt='circle' className='border border-[#505050] rounded-full p-1' height={80} width={80}/>
        <p className='text-center'>HighLight</p>
        </div>
      </div>

      <div className='mt-7 flex justify-around'>
        <Image src={photos} alt='photo' height={30} width={30}/>
        <Image src={tags} alt='tags' height={30} width={30}/>
      </div>

    </div>
    <div className='gap-1'>
        <div className='flex'>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        </div>
        <div className='flex '>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        <Image src={Rectangle} alt='rec' height={100} width={130}/>
        </div>
    </div>
    </>
  );
}
