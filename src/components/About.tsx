import Plus from '../assests/Plus.svg';
import Facebook from '../assests/Facebook.svg';
import Instagram from '../assests/Instagram.svg';
import Youtube from '../assests/Youtube.svg';
import Twitter from '../assests/Twitter.svg';

function About() {
  return (
    <div className='flex flex-col rounded-[18px] border border-[#DCDCDC] w-[100%]'>
      <div className='px-3 sm:px-7 md:px-[35px] flex items-center justify-between py-5 rounded-tr-[18px] rounded-tl-[18px] bg-gradient-to-r from-customGreen to-customTransparent'>
       <p className='font-Nun font-medium sm:font-semibold text-lg sm:text-2xl leading-[32.74px] text-[#313131]'>A Little About me</p>
       <button className='bg-white border border-[#3A643B] flex items-center gap-[10px] py-[6px] px-3 sm:px-[21px] rounded-[10px]'>
        <p className='font-Poppin text-[#585858] font-medium text-base leading-6'>Follow</p>
        <img src={Plus} alt='Plus' />
       </button>
      </div>
      <div className='w-[100%] flex flex-col py-10 px-[8%] gap-10'>
        <div className='flex flex-col gap-2 items-start'>
            <p className='font-Poppin text-[#33354880] font-medium text-base leading-[27px]'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
            <div className='w-[100%] flex items-center gap-[10px]'>
            <hr className='border border-[#797979] w-[80%]'></hr>
                <p className='font-Poppin text-[#2B2B2B] underline font-medium text-base leading-[27px]'>ReadMore</p>
            </div>
        </div>

        <div className='flex flex-wrap w-[100%] items-center gap-4'>
         <p className='font-Nun text-[#000000] font-medium text-lg sm:text-xl leading-5 tracking-[-1%]'>Language Spoken </p>
         <div className='font-Nun flex bg-[#2E37A40A] py-2 px-3 md:px-4 text-[#505050] font-medium text-base md:text-xl leading-5 tracking-[-1%] rounded-2xl'>English </div>
         <div className='font-Nun flex bg-[#2E37A40A] py-2 px-3 md:px-4 text-[#505050] font-medium text-base md:text-xl leading-5 tracking-[-1%] rounded-2xl'>Hindi </div>
         <div className='font-Nun flex bg-[#2E37A40A] py-2 px-3 md:px-4 text-[#505050] font-medium text-base md:text-xl leading-5 tracking-[-1%] rounded-2xl'>Telugu </div>
        </div>

        <div className='flex flex-wrap w-[100%] items-center gap-4'>
            <div className='w-10 h-10 flex items-center justify-center border-[0.3px] border-[#8E8E8E] rounded-full'>
                <img src={Facebook} alt='Facebook' />
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[0.3px] border-[#8E8E8E] rounded-full'>
                <img src={Instagram} alt='Instagram' />
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[0.3px] border-[#8E8E8E] rounded-full'>
                <img src={Youtube} alt='Youtube' />
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[0.3px] border-[#8E8E8E] rounded-full'>
                <img src={Twitter} alt='Twitter' />
            </div>
        </div>

      </div>
    </div>
  );
}

export default About;