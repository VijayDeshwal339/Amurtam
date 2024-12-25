
function Concern() {
  return (
    <div className='flex flex-col rounded-[18px] border border-[#DCDCDC] w-[100%]'>
       <div className='px-3 sm:px-7 md:px-[35px] flex items-center justify-between py-5 rounded-tr-[18px] rounded-tl-[18px] bg-gradient-to-r from-customGreen to-customTransparent'>
       <p className='font-Nun font-medium sm:font-semibold text-lg sm:text-2xl leading-[32.74px] text-[#313131]'>The Concerns I Treat</p>
      </div>
      <div className='flex flex-wrap w-[90%]  mx-auto py-5 gap-5'>
      <button className='font-Poppin p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Skin Treatment</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Pregnancy</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Period Doubts</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Endometriosis</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Pelvic Pain</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-[#F7F7FC] text-[#3A643B] font-medium text-base leading-[18px]'>Ovarian Cysts</button>
      <button className='font-Nun p-[12px] rounded-[18px] bg-white text-[#3A643B] border border-[#E0DFDF] font-medium text-base leading-[18px]'>+ 5 More</button>
      </div>
    </div>
  )
}

export default Concern