

import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";


const RoomDetails = () => {
const detailsRoom = useLoaderData();
  const nevigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date())


const { _id, name, price, description, image,rating } = detailsRoom


  const confirmBooking = async () => {
    const bookingData = {
     price,
      name,
      description, 
      image, 
      startDate, 
      rating,
      
    };
    console.log("Booking Confirmation Data:", bookingData);
     try {
      const response = await axios.post('https://evanora-hotel-server.vercel.app/bookingroom', bookingData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Booking Response:", response.data);
       toast.success("Booking confirmed!");
       nevigate('/mybookings')
       
    } catch (error) {
      console.error("Error Confirming Booking:", error.response ? error.response.data : error.message);
      toast.error("Booking failed. Please try again!");
    }
  }
  
  
  return (
    <div className="room-details-page py-10 text-center w-10/12 mx-auto">
      <hr />
        <>
        <div className="md:flex md:gap-20">
          <div className="md:w-1/2">
          
          <img
            src={image}
            alt={name}
            className="w-full mx-auto rounded-md  object-cover my-4"
          /></div>
          <div className="text-left md:ml-30 md:mt-12 ">
            <h1 className="text-4xl font-bold my-2">{name}</h1>
          <p className="text-xl font-bold">Price: ${price}</p>
            <p>{description}</p>
           

           <ul className="list-disc list-inside space-y-1 mt-2">
        {detailsRoom.features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>


          <button
            className=" duration-500 bg-[#715d54]  text-white px-4 py-2 mt-4 rounded-sm"
         onClick={()=>document.getElementById('my_modal_4').showModal()}
          >
            Book Now
          </button>
         </div>
       </div>
        </>
      
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-1xl pl-7 overflow-hidden bg-[#715d54] text-white h-4/4 shadow-lg text-left">
  <h2 className="text-2xl text-center mb-3 font-bold ">Booking Summary</h2>
    <>
            <img
            src={image}
              alt={name}
            className=" mx-auto rounded-md w-9/12 object-cover my-2"
          />
        <p className=" text-2xl font-bold  md:ml-16"> {name}</p>
        <p className="font-semibold text-[20px]  md:ml-16"> ${price}</p>
        <p className="text-white md:ml-16"> {description}</p>
        <ul className="list-disc  md:ml-16 list-inside space-y-1 mt-2">
        {detailsRoom.features.map((feature, index) => (
          <li key={index} className="text-white">
            {feature}
          </li>
        ))}
      </ul>
          
       <DatePicker
       selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/dd/yyyy"
      className="mt-2 bg-slate-100  md:ml-16 text-black font-semibold p-1 rounded-sm "
      />
           
      <div className="modal-action ">
              <button
       onClick={confirmBooking} className="btn text-black duration-500    p-3 rounded-md block">Confirm </button>
      <form method="dialog">
       
        <button className="text-[14px] btn text-red-600 font-bold">Cancel</button>
      </form>
    </div>
            </>
          
  
  </div>
</dialog>
    
      
    </div>
  );
};

export default RoomDetails;