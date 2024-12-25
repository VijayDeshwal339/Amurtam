import Frame from '../assests/Frame6.svg';
import Star from '../assests/Star.svg';

function Reviews() {
  return (
    <div className='flex flex-col rounded-[18px] border border-[#DCDCDC] w-[100%]'>
       <div className='px-3 sm:px-7 md:px-[35px] flex items-center justify-between py-5 rounded-tr-[18px] rounded-tl-[18px] bg-gradient-to-r from-customGreen to-customTransparent'>
       <p className='font-Nun font-medium sm:font-semibold text-lg sm:text-2xl leading-[32.74px] text-[#313131]'>Featured Reviews (102)</p>
      </div>
      <div className='flex flex-col gap-4 py-5 px-5'>
        <div className='w-[100%] md:w-[87%] lg:w-[100%] xl:w-[87%] px-[6%] flex flex-col gap-[14px] pt-[13px] pb-[22px] rounded-[17px] bg-[#FAFAFA]'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <img src={Frame} alt='' />
                    <div className='flex flex-col items-start gap-[3px]'>
                        <p className='font-Nun text-[#2F2F2F] font-semibold text-xl leading-[27.28px]'>Alicent Hightower</p>
                        <p className='font-Nun text-[#939393] font-medium text-base leading-[21.82px]'>Consulted for Skin care</p>
                    </div>
                </div>
                <p className='font-Nun text-[#979797] font-normal text-base leading-[18px] tracking-[-1%]'>20 January 2023</p>
            </div>
            <div className='flex flex-col items-center md:items-start gap-[5px]'>
                <div className='flex items-center'>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                </div>
                <p className='font-Nun text-[#2E2F2E] font-normal text-base leading-6 tracking-[-1%]'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>
        </div>
        <div className='w-[100%] md:w-[87%] lg:w-[100%] xl:w-[87%] px-[6%] flex flex-col gap-[14px] pt-[13px] pb-[22px] mb-5 rounded-[17px] bg-[#FAFAFA]'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <img src={Frame} alt='' />
                    <div className='flex flex-col items-start gap-[3px]'>
                        <p className='font-Nun text-[#2F2F2F] font-semibold text-xl leading-[27.28px]'>Alicent Hightower</p>
                        <p className='font-Nun text-[#939393] font-medium text-base leading-[21.82px]'>Consulted for Skin care</p>
                    </div>
                </div>
                <p className='font-Nun text-[#979797] font-normal text-base leading-[18px] tracking-[-1%]'>20 January 2023</p>
            </div>
            <div className='flex flex-col items-center md:items-start gap-[5px]'>
                <div className='flex items-center'>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                </div>
                <p className='font-Nun text-[#2E2F2E] font-normal text-base leading-6 tracking-[-1%]'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;