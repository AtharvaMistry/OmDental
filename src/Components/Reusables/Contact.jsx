import { UilLocationPoint, UilPhoneAlt, UilCalendarAlt , UilClock} from "@iconscout/react-unicons";

function Contact() {
  return (
    <div className="grid grid-cols-1 gap-5 my-4 px-4 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilLocationPoint className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">120 Dental Street</p>
          <p className="text-gray-600 text-xs">San Francisco, CA 94111</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilPhoneAlt className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">800-555-2368</p>
          <p className="text-gray-600 text-xs">Call us today!</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilClock className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">Opening Hours</p>
          <p className="text-gray-600 text-xs">Mon - Fri: 8:00 - 17:00</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilCalendarAlt className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">Book Appointment</p>
          <p className="text-gray-600 text-xs">email@email.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
