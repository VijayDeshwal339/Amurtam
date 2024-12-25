import Women from '../assests/Women.svg';
import Skincare from '../assests/Skincare.svg';
import Immunity from '../assests/Immunity.svg';
import Hair from '../assests/Hair.svg';

function Specialize()  {
  return (
    <div className='flex flex-col rounded-[18px] border border-[#DCDCDC] w-[100%]'>
      <div className='px-3 sm:px-7 md:px-[35px] flex items-center justify-between py-5 rounded-tr-[18px] rounded-tl-[18px] bg-gradient-to-r from-customGreen to-customTransparent'>
       <p className='font-Nun font-medium sm:font-semibold text-lg sm:text-2xl leading-[32.74px] text-[#313131]'>I Specialize In</p>
      </div>

      <div className='w-[100%] flex flex-wrap items-center lg:justify-start justify-center gap-[14px] px-[8%] py-10'>

       <div className='flex flex-col items-center gap-[7px]'>
         <div className='bg-[#FFFCF2] px-2 py-[9px] border border-[#EAEAEA] rounded-[9px]'>
           <img src={Women} alt='Women' />
         </div>
         <p className='font-Nun text-[#000000] font-medium text-base leading-[19.2px]'>women’s health</p>
       </div>

       <div className='flex flex-col items-center gap-[7px]'>
         <div className='bg-[#FFFCF2] px-2 py-[9px] border border-[#EAEAEA] rounded-[9px]'>
           <img src={Skincare} alt='Skincare' />
         </div>
         <p className='font-Nun text-[#000000] font-medium text-base leading-[19.2px]'>Skin Care</p>
       </div>

       <div className='flex flex-col items-center gap-[7px]'>
         <div className='bg-[#FFFCF2] px-2 py-[9px] border border-[#EAEAEA] rounded-[9px]'>
           <img src={Immunity} alt='Immunity' />
         </div>
         <p className='font-Nun text-[#000000] font-medium text-base leading-[19.2px]'>Immunity</p>
       </div>

       <div className='flex flex-col items-center gap-[7px]'>
         <div className='bg-[#FFFCF2] px-2 py-[9px] border border-[#EAEAEA] rounded-[9px]'>
           <img src={Hair} alt='Hair' />
         </div>
         <p className='font-Nun text-[#000000] font-medium text-base leading-[19.2px]'>Hair care</p>
       </div>
      </div>
    </div>
  );
}

export default Specialize;