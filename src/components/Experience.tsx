import Frame from '../assests/Frame5.svg';

function Experience()  {
  return (
    <div className='flex flex-col rounded-[18px] border border-[#DCDCDC] w-[100%]'>
      <div className='px-3 sm:px-7 md:px-[35px] flex items-center justify-between py-5 rounded-tr-[18px] rounded-tl-[18px] bg-gradient-to-r from-customGreen to-customTransparent'>
        <p className='font-Nun font-medium sm:font-semibold text-lg sm:text-2xl leading-[32.74px] text-[#313131]'>My Work Experience</p>
      </div>
      <div className='flex flex-col gap-5 py-6 w-[90%] mx-auto'>
        <p className='font-Poppin text-[#3A643B] font-semibold text-base sm:text-lg leading-[19.2px] mt-4 mx-2'>I have been in practice for : 7+ Years</p>
        <hr className='w-[100%] md:w-[78%] lg:w-[100%] xl:w-[78%] border border-[#D1D5D1]'></hr>
        <div className='w-[100%] md:w-[85%] lg:w-[100%] xl:w-[85%] flex items-start justify-between ml-2'>
          <div className='flex items-start gap-3'>
            <img src={Frame} alt='Frame' />
            <div className='flex flex-col items-start gap-2'>
              <p className='font-Poppin text-[#333548] font-medium text-sm sm:text-base leading-[21px]'>Midtown Medical Clinic</p>
              <p className='font-Poppin text-[#33354880] font-medium text-sm sm:text-base leading-[21px]'>Senior doctor</p>
            </div>
          </div>
          <p className='font-Poppin text-[#333548B5] font-normal text-xs sm:text-base leading-[21px] uppercase'>2016-present</p>
        </div>
        <div className='w-[100%] md:w-[85%] lg:w-[100%] xl:w-[85%] flex items-start justify-between ml-2 mb-5'>
          <div className='flex items-start gap-3'>
            <img src={Frame} alt='Frame' />
            <div className='flex flex-col items-start gap-2'>
              <p className='font-Poppin text-[#333548] font-medium text-sm sm:text-base leading-[21px]'>Midtown Medical Clinic</p>
              <p className='font-Poppin text-[#33354880] font-medium text-sm sm:text-base leading-[21px]'>Senior doctor</p>
            </div>
          </div>
          <p className='font-Poppin text-[#333548B5] font-normal text-xs sm:text-base leading-[21px] uppercase'>2010-2015</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;