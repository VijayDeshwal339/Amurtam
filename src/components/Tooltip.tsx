import { FC } from 'react';
import Cancel from '../assests/Cancel.png';

interface TooltipProps {
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ text }) => {
  return (
    <div className='flex items-center gap-[10px] rounded-[31px] px-[30px] py-[15px] bg-[#EAF2EA]'>
      <p className='font-Inter text-[#000000] font-normal text-base leading-[19.36px] tracking-[0.5px]'>{ text }</p>
      <img src={Cancel} alt='Cancel' />
    </div>
  );
}

export default Tooltip;