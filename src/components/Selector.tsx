import Vector from '../assests/Vector1.svg';

function Selector() {
  return (
    <div className='flex flex-col'>
      <div className='w-[90%] mx-auto flex flex-wrap items-center py-12 justify-center gap-4 xl:gap-16'>
        <div className='font-DIN flex items-center justify-between py-[6px] px-[13px] bg-[#F3F3F3] rounded-[7px] gap-[41px] cursor-pointer'>
          <p className='font-DIN font-medium text-base leading-[22.4px] text-[#585858]'>Expertise</p>
          <img src={Vector} alt='Vector' className='w-3 h-[5px]' />
        </div>
        <div className='font-DIN flex items-center justify-between py-[6px] px-[13px] bg-[#F3F3F3] rounded-[7px] gap-[56px] cursor-pointer'>
          <p className='font-DIN font-medium text-base leading-[22.4px] text-[#585858]'>Gender</p>
          <img src={Vector} alt='Vector' className='w-3 h-[5px]' />
        </div>
        <div className='font-DIN flex items-center justify-between py-[6px] px-[13px] bg-[#F3F3F3] rounded-[7px] gap-[70px] cursor-pointer'>
          <p className='font-DIN font-medium text-base leading-[22.4px] text-[#585858]'>Fees</p>
          <img src={Vector} alt='Vector' className='w-3 h-[5px]' />
        </div>
        <div className='font-DIN flex items-center justify-between py-[6px] px-[13px] bg-[#F3F3F3] rounded-[7px] gap-[32px] cursor-pointer'>
          <p className='font-DIN font-medium text-base leading-[22.4px] text-[#585858]'>Languages</p>
          <img src={Vector} alt='Vector' className='w-3 h-[5px]' />
        </div>
        <div className='font-DIN flex items-center justify-between py-[6px] px-[13px] bg-[#DCEEDC] rounded-[7px] gap-[40px] cursor-pointer'>
          <p className='font-DIN font-medium text-base leading-[22.4px] text-[#3A643B]'>All Filters</p>
          <img src={Vector} alt='Vector' className='w-3 h-[5px]' />
        </div>
      </div>
      <hr className='border border-[#EDEDED]'></hr>
    </div>
  );
}

export default Selector;