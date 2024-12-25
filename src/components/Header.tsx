import {useState } from 'react';
import Logo from '../assests/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div className='bg-[#FFF7E2] px-4 lg:px-10 xl:px-[100px] h-[94px] flex items-center justify-between'>
        <div className='flex items-center gap-5 lg:gap-10 xl:gap-20'>
          <div className='w-[150px] sm:w-[200px] xl:w-[259px] h-[49px] xl:h-[49px]'>
          <Link to='/amurtam'>
            <img src={Logo} alt='' className='w-[100%] h-[100%]'/>
          </Link>
          </div>
          <div className='hidden lg:flex items-center gap-4 xl:gap-10 text-[#474747] '>
            <Link to='/'>
              <p className='font-DIN font-medium text-xl leading-7'>Home</p>
            </Link>
            <p className='font-DIN font-bold text-xl leading-7'>Find Doctors</p>
            <p className='font-DIN font-medium text-xl leading-7'>About us</p>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-[10px]'>
          <button className='text-[#3A643B] bg-[#FFF7E2] border border-[#3A643B] px-[28px] xl:px-[37px] py-[10px] xl:pt-[11px] xl:pb-[16px] rounded-[11px] font-DIN font-medium text-xl xl:text-2xl leading-[30.91px]'>
            Login
          </button>
          <button className='bg-[#3A643B] text-white px-[30px] xl:px-[39px] py-[10px] xl:pt-[11px] xl:pb-[16px] rounded-[11px] font-DIN font-medium text-xl xl:text-2xl leading-[30.91px]'>
            Sign-up
          </button>
        </div>

        <div className='lg:hidden mr-4'>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-8 h-8 text-[#474747]' >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className='fixed top-0 left-0 w-[250px] h-full bg-[#FFF7E2] shadow-lg z-50 flex flex-col p-5'>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='self-end text-[#474747] mb-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <Link to='/' className='mb-4 text-[#474747] font-DIN font-medium text-lg'>
            Home
          </Link>
          <p className='mb-4 text-[#474747] font-DIN font-medium text-lg'>
            Find Doctors
          </p>
          <p className='mb-4 text-[#474747] font-DIN font-medium text-lg'>
            About Us
          </p>
          <button className='text-[#3A643B] bg-[#FFF7E2] border border-[#3A643B] px-4 py-2 rounded-md font-DIN font-medium mb-2'>
            Login
          </button>
          <button className='bg-[#3A643B] text-white px-4 py-2 rounded-md font-DIN font-medium'>
            Sign-up
          </button>
        </div>
      )}
    </>
  );
};

export default Header;