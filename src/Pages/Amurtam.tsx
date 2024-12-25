import Rectangle from '../components/Rectangle';
import Selector from '../components/Selector';
import Tooltip from '../components/Tooltip';
import Profile from '../components/Profile';

function Amurtam() {
  const tooltipsData: string[] = ['Hair care', 'Female', 'Rs.0-Rs.500', 'Hindi'];

  return (
    <div className='flex flex-col'>
      <Rectangle />
      <Selector />
      <div className='w-[95%] sm:w-[90%] mx-auto py-2'>
        <div className='flex flex-wrap gap-4 items-center justify-center xl:justify-end my-10'>
          {tooltipsData.map((tooltip: string, index: number) => (
            <Tooltip key={index} text={tooltip} />
          ))}
        </div>
        <div className='flex flex-col gap-5 lg:flex-row xl:w-[90%] items-center justify-center mx-auto'> 
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Amurtam;