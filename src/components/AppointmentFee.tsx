import { useState } from 'react';
import Frame from '../assests/Frame7.svg';
import Frame1 from '../assests/Frame8.svg';
import DA from '../assests/DA.svg';
import DA1 from '../assests/DA1.svg';

function AppointmentFee()  {
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [selectedType, setSelectedType] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<number>(1);

  const morningSlots: string[] = ["09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM"];
  const eveningSlots: string[] = ["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"];

  const handleSelectSlot = (slot: string): void => {
    setSelectedTime(slot);
  };

  interface AppointmentType {
    id: number;
    type: string;
    duration: string;
    isVideo: boolean;
  }

  const appointmentTypes: AppointmentType[] = [
    { id: 1, type: "In-Clinic", duration: "45 Mins", isVideo: false },
    { id: 2, type: "Video", duration: "45 Mins", isVideo: true },
    { id: 3, type: "In-Clinic", duration: "10 Mins", isVideo: false },
  ];

  const handleSelectType = (id: number): void => {
    setSelectedType(id);
  };

  interface DateSlot {
    id: number;
    date: string;
    slots: string;
    textColor: string;
  }

  const dateSlots: DateSlot[] = [
    { id: 1, date: "Mon, 10 Oct", slots: "10 slots", textColor: '#818181' },
    { id: 2, date: "Tue, 11 Oct", slots: "02 slots", textColor: '#D5512E' },
    { id: 3, date: "Wed, 12 Oct", slots: "05 slots", textColor: '#F1B93A' },
  ];

  const handleDateSelect = (id: number): void => {
    setSelectedDate(id);
  };

  const handleDASelect = (): void => {
    if (selectedDate > 1) {
      setSelectedDate(selectedDate - 1);
    }
  };

  const handleDA1Select = (): void => {
    if (selectedDate < 3) {
      setSelectedDate(selectedDate + 1);
    }
  };

  return (
    <div className='w-[100%] h-[100%] flex flex-col border border-[#E8E8E8] rounded-[29px] py-8 gap-10'>
      <div className='w-[93%] mx-auto h-[59px] rounded-[15px] border border-[#E2E2E2] flex items-center justify-between px-7'>
        <p className='font-Nun text-[#000000] font-semibold text-base sm:text-xl leading-[27.28px] tracking-[0.2px]'>Appointment Fee</p>
        <p className='font-Inter text-[#3A643B] font-semibold text-base sm:text-xl leading-[24.2px] tracking-[0.2px]'>₹699.00</p>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row w-[93%] mx-auto items-center gap-3'>
        <p className='font-Nun font-medium sm:font-bold text-base sm:text-xl leading-5 tracking-[0.5px] text-[#000000] text-center w-[100%] xl:w-[65%]'>Select your mode of session</p>
        <hr className='border border-[#D4D4D4] w-[80%]  xl:w-[45%]'></hr>
      </div>
      <div className="w-[92%] mx-auto flex flex-wrap justify-center items-center gap-[22px]">
        {appointmentTypes.map(({ id, type, duration, isVideo }) => (
          <button
            key={id}
            className={`w-[158px] h-[78px] rounded-[10px] flex flex-col gap-1 items-center justify-center border ${
              selectedType === id
                ? "border-[#3A643B85] bg-[#F2FBF2]"
                : "border-[#E5E5E5]"
            }`}
            onClick={() => handleSelectType(id)}
          >
            <div className={`flex items-center ${isVideo ? "gap-2" : ""}`}>
              <p
                className={`font-Poppin ${
                  selectedType === id ? "text-[#3A643B]" : "text-[#1F1F1F]"
                } font-semibold text-lg leading-[21.6px] tracking-[0.5px]`}
              >
                {type}
              </p>
              {isVideo && <img src={Frame} alt="Video Icon" />}
            </div>
            <p className="font-Poppin text-[#606060] font-normal text-base leading-[21.82px] tracking-[0.5px]">
              {duration}
            </p>
          </button>
        ))}
      </div>
      <div className='w-[90.75%] mx-auto flex items-center gap-2'>
        <p className='font-Nun text-[#000000] font-medium xl:font-bold text-lg md:text-xl leading-[27.8px] tracking-[0.2px] ml-3'>Pick a Time slot</p>
        <hr className='border border-[#D4D4D4] w-[55%]'></hr>
        <img src={Frame1} alt='' />
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[90.75%] py-6 px-8 mx-auto flex flex-wrap justify-center items-center gap-[18px] bg-white rounded-[21px] border border-[#E1E1E1]">
        <img src={DA} alt="DA" onClick={handleDASelect} className='cursor-pointer' />
        {dateSlots.map(({ id, date, slots, textColor }) => (
          <div
            key={id}
            onClick={() => handleDateSelect(id)}
            className={`border flex flex-col items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${
              selectedDate === id ? "bg-[#F2FBF2] border-[#3A643B]" : `bg-white border-[#E2E2E2]`
            }`}
          >
            <p className={`font-Inter ${selectedDate === id ? "font-semibold text-base leading-[19.36px] tracking-[0.2px] " : ""}`}
              style={{ color: selectedDate === id ? '#3A643B' : '#000000' }}>
              {date}
            </p>
            <p className="font-Nun font-bold text-base leading-[21.82px]" style={{ color: textColor }}>
              {slots}
            </p>
          </div>
        ))}
        <img src={DA1} alt="DA1" onClick={handleDA1Select} className='cursor-pointer' />
      </div>
      <div className="w-[87%] flex flex-col gap-[13px] mx-auto">
        <p className="font-Nun text-[#000000] font-bold text-lg leading-[24.55px] tracking-[0.2px] ml-3">Morning</p>
        <div className="w-[100%] flex flex-wrap gap-3">
          {morningSlots.map((slot: string, index: number) => (
            <div
              key={index}
              className={`border border-[#EBEBEB] px-[19px] py-4 sm:py-[22px] rounded-[22px] flex items-center justify-center cursor-pointer ${
                selectedTime === slot ? "bg-[#3A643B] text-white" : "text-[#131313]"
              }`}
              onClick={() => handleSelectSlot(slot)}
            >
              <p className="font-Inter font-normal text-[15px] leading-[18.15px] tracking-[0.2px]">{slot}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[87%] flex flex-col gap-[15px] mx-auto'>
        <p className='text-[#000000] font-bold text-lg leading-[24.55px] tracking-[0.2px] ml-3'>Evening</p>
        <div className='w-[100%] flex flex-wrap gap-3'>
          {eveningSlots.map((slot: string, index: number) => (
            <div
              key={index}
              className={`border border-[#EBEBEB] px-[18px] py-4 sm:py-[22px] rounded-[22px] flex items-center justify-center cursor-pointer ${
                selectedTime === slot ? "bg-[#3A643B] text-white" : " text-[#131313]"
              }`}
              onClick={() => handleSelectSlot(slot)}
            >
              <p className="font-Inter font-normal text-[15px] leading-[18.15px] tracking-[0.2px]">{slot}</p>
            </div>
          ))}
        </div>
      </div>
      <button className='rounded-lg w-[75%] sm:w-[81.5%] h-10 sm:h-[60px] flex items-center justify-center bg-[#3A643B] text-white font-medium text-lg sm:text-xl leading-[24.2px] mx-auto'>Make an appointment</button>
    </div>
  );
}

export default AppointmentFee;