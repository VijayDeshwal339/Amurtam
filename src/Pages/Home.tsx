import Appointment from '../components/Appointment';
import About from '../components/About';
import Specialize from '../components/Specialize';
import Concern from '../components/Concern';
import Experience from '../components/Experience';
import Reviews from '../components/Reviews';
import AppointmentFee from '../components/AppointmentFee';

function Home() {
  return (
    <div className='flex flex-col w-[100%] lg:w-[90%] xl:[80%] mx-auto mt-[43px] gap-[43px]'>
       <Appointment/>
       <div className='flex lg:flex-row flex-col gap-[43px] xl:gap-[3%] pb-[43px]'>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] mx-auto xl:w-[51%] flex flex-col gap-[43px]'>
        <About/>
        <Specialize />
        <Concern />
        <Experience />
        <Reviews />
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] mx-auto xl:w-[47.8%] h-[100%]'>
        <AppointmentFee />
        </div>
    </div>
    </div>
  );
}

export default Home;