import Profiles from '../assests/Profiles.svg';
import Frame from '../assests/Frame.svg';
import Frame1 from '../assests/Frame1.svg';
import Frame2 from '../assests/Frame2.svg';

function Profile() {
  return (
    <div className='flex flex-col items-center w-[310px] sm:w-[356px] py-8 bg-[#FFF7E2] rounded-[30px] gap-[21px]'>
      <img src={Profiles} alt='Profiles' className='w-[149px] h-[154px]'/>
      <div className='flex flex-col items-center gap-4'>
        <p className='font-Nun font-bold text-[32px] leading-7 tracking-[-1%] text-[#2E2F2E]'>Dr. Prerna Narang</p>
        <div className='flex flex-col items-start gap-[7px]'>
          <div className='flex items-center gap-[15px]'>
            <img src={Frame} alt='Frame' />
            <p className='font-Nun text-[#646665] font-normal text-base leading-5 tracking-[-1%]'>Male-Female Infertility</p>
          </div>
          <div className='flex items-center gap-[7px]'>
            <img src={Frame1} alt='Frame1' />
            <p className='font-Nun text-[#646665] font-normal text-base leading-5 tracking-[-1%]'>7 years of Experience</p>
          </div>
          <div className='flex items-center gap-[12px]'>
            <img src={Frame2} alt='Frame2' />
            <p className='font-Nun text-[#646665] font-normal text-base leading-5 tracking-[-1%]'>Speaks: English, Hindi, Marathi</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex flex-col items-center rounded-[10px] border border-[#3A643B63] pt-3 pb-4 px-2 gap-3'>
            <p className='font-Nun text-[#3C3C3C] font-semibold text-sm leading-5 tracking-[-1%]'>Video Consultation</p>
            <p className='font-Nun text-[#3A643B] font-bold text-sm leading-5 tracking-[-1%]'>₹800</p>
          </div>
          <div className='flex flex-col items-center rounded-[10px] border border-[#3A643B63] pt-3 pb-4 px-2 gap-3'>
            <p className='font-Nun text-[#3C3C3C] font-semibold text-sm leading-5 tracking-[-1%]'>Chat Consultation</p>
            <p className='font-Nun text-[#3A643B] font-bold text-sm leading-5 tracking-[-1%]'>Free</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[9px]'>
        <button className='font-Nun border border-[#3A643B] rounded-lg py-[15px] px-[78px] text-[#3A643B] font-semibold text-base leading-5 tracking-[-1%] bg-white'>View Profile</button>
        <button className='font-Nun rounded-lg py-[15px] px-[37px] text-white font-semibold text-base leading-5 tracking-[-1%] bg-[#3A643B]'>View Profile</button>
      </div>
    </div>
  );
}

export default Profile;