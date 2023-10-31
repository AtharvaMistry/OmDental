import {
  UilLocationPoint,
  UilPhoneAlt,
  UilCalendarAlt,
  UilClock,
} from "@iconscout/react-unicons";

function Contact() {
  return (
    <div className="grid grid-cols-1 gap-5 my-4 px-4 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilLocationPoint className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">
            102 , Kabir Arcade , Grid Chowkdi , Beside ITI Ground
          </p>
          <p className="text-gray-600 text-xs">Anand- Lambhvel road,Anand</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilPhoneAlt className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">6353846481</p>
          <p className="text-gray-600 text-xs">Call us today!</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilClock className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">Opening Hours</p>
          <p className="text-gray-600 text-xs">
            Monday to Saturday <br />
            9.30am to 12.30pm <br /> 4.30pm to 8.00pm
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 border border-dashed border-gray-700 px-3 py-2 rounded-md rotate-diagonal-1">
        <UilCalendarAlt className="text-[#8774d9]" />
        <div>
          <p className="text-gray-800 text-sm">Book Appointment</p>
          <a href="mailto:omdentalcare0708@gmail.com" className="btn">
            <p className="text-gray-600 text-xs">
              omdentalcare0708
              <br />
              @gmail.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
