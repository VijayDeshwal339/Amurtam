import Location from '../assests/Location.svg';
import Vector from '../assests/Vector1.svg';
import Arrow from '../assests/Arrow.svg';
import Ellipse from '../assests/Ellipse.png';
import Ellipse1 from '../assests/Ellipse1.png';
import Ellipse2 from '../assests/Ellipse2.png';
import Ellipse3 from '../assests/Ellipse3.png';

function Rectangle() {
  return (
    <div className='flex flex-col md:items-center w-[100%] bg-[#EAF2EA] pt-[60px] pb-[46px] gap-[37px] relative'>
      <div className='absolute top-0 w-[92px] sm:w-[138px] md:[184px] left-2 sm:left-[7%] '>
        <img src={Ellipse} alt='Ellipse' />
      </div>
      <div className='absolute bottom-0 w-[92px] sm:w-[138px] md:[184px] left-3 sm:left-[14.25%] '>
        <img src={Ellipse1} alt='Ellipse1' />
      </div>
      <div className='absolute top-0 w-[92px] sm:w-[138px] md:[184px] right-1 sm:right-4 md:left-[79.8%] '>
        <img src={Ellipse2} alt='Ellipse2' />
      </div>
      <div className='absolute bottom-0 w-[92px] sm:w-[138px] md:[184px] right-1 sm:right-8 md:left-[74.3%]'>
        <img src={Ellipse3} alt='Ellipse3' />
      </div>
      <p className='font-Poppin px-4 sm:px-4 font-medium text-center text-2xl sm:text-[26px] md:text-[32px] leading-6 tracking-[0.5%] capitalize'>
        Find expert Doctors for an In-clinic session here
      </p>

      <div className='flex flex-col md:flex-row items-center gap-4'>
        <div className="relative flex items-center w-[200px] h-[54px]">
          <img src={Location} alt='Location' className="absolute w-4 h-[19.63px] top-[8] left-4" />
          <img src={Vector} alt='Vector' className='absolute w-[11.96px] h-[6.6.7px] top-7.5 right-4' />
          <input className="font-Inter w-[100%] bg-white placeholder:font-Inter placeholder:text-[#767676] placeholder:font-normal placeholder:text-base placeholder:leading-6 tracking-[0.5%] text-slate-700 text-sm border border-[#D4D4D4] rounded-lg pl-12 pr-3 h-[100%] outline-none" placeholder="Select Location" />
        </div>

        <div className="relative flex items-center w-[90%] sm:w-[474.92px] h-[54px]">
          <img src={Arrow} alt='Arrow' className='absolute w-[28.16px] h-[24px] top-7.5 right-3' />
          <input className="font-Inter w-[100%]  bg-white placeholder:font-Inter placeholder:text-[#7B7B7B] placeholder:font-normal placeholder:text-base placeholder:leading-[19.36px] tracking-[0.5%] text-slate-700 text-sm border border-[#D4D4D4] rounded-[10px] pl-5 h-[100%] outline-none" placeholder="eg. Doctor, specialisation, clinic name" />
        </div>
      </div>
    </div>
  );
}

export default Rectangle;