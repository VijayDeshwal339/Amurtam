import Frame from '../assests/Frame3.svg';
import Ellipse from '../assests/Ellipse4.svg';
import Frame1 from '../assests/Frame4.svg';
import Star from '../assests/Star.svg';

function Appointment() {
  return (
    <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[70%] mx-auto lg:w-[100%]'>
        <div className='w-[100%] hidden md:flex h-[197px] rounded-xl' style={{backgroundImage:`Url('${Frame}')`}}></div> 

        <div className='pb-5 lg:pb-0 lg:h-[151px] w-[100%] bg-[#FFFBF2] mt-10 md:-mt-[70px] lg:-mt-[51px] xl-mt-[43px] flex flex-col lg:flex-row gap-5 lg:gap-0 items-center lg:px-[25px] xl:px-[45px] justify-between'>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
              <div className='w-[100px] md:w-[159px] h-[100px] md:h-[159px] -mt-6  lg:-mt-14 '>
              <img src={Ellipse} alt='' className='w-[100%] h-[100%]' />
              </div>
             <div className='flex flex-col items-center lg:items-start gap-2'>
           <div className='flex items-center gap-1'>
           <p className='font-Poppin font-medium text-xl leading-[21.6px] text-[#212529]'>Dr. Bruce Willis</p>
           <img src={Frame1} alt='Frame1' />
             </div>
            <p className='font-Poppin font-medium text-[15px] leading-[16.8px] text-[#3A643B]'>Gynecologist</p>
            <div className='flex items-center gap-1'>
           <p className='font-Nun font-semibold text-[15px] leading-6 tracking-[-1%] text-[#626262]'>4.2</p>
           <div className='flex items-center'>
           <img src={Star} alt='Star' />
           <img src={Star} alt='Star' />
           <img src={Star} alt='Star' />
           <img src={Star} alt='Star' />
           </div>
            </div>
         </div>
             </div>
            <div className='flex items-center gap-7 xl:gap-[74px]'>
          <div className='flex flex-col items-center gap-[5px]'>
            <p className='font-Poppin text-[#3A643B] font-medium text-sm leading-[16.8px]'>Followers</p>
            <p className='font-Poppin text-[#212529] font-semibold text-xl leading-6'>850</p>
          </div>
          <div className='flex flex-col items-center gap-[5px]'>
            <p className='font-Poppin text-[#3A643B] font-medium text-sm leading-[16.8px]'>Following</p>
            <p className='font-Poppin text-[#212529] font-semibold text-xl leading-6'>18K</p>
          </div>
          <div className='flex flex-col items-center gap-[5px]'>
            <p className='font-Poppin text-[#3A643B] font-medium text-sm leading-[16.8px]'>Posts</p>
            <p className='font-Poppin text-[#212529] font-semibold text-xl leading-6'>250</p>
          </div>
            </div>
            <button className='font-Inter bg-[#3A643B] text-white py-3 px-5 lg:px-3 xl:px-8 rounded-lg font-medium text-xl leading-[24.5px]'>Book an Appointment</button>
        </div>
    </div>
  );
}

export default Appointment;