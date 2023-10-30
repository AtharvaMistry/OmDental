import IconImg1 from "../assets/icons8-dental-91.png";
import { UilPhone } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="grid bg-[#c7bfec] px-4 sm:grid-cols-3 gap-5 md:px-20 py-10">
      <div>
        <div>
          <p className="text-[#8774d9] font-semibold">OmDentalClinic</p>
        </div>
        <p className="text-sm my-3 text-gray-600">
          OmDentalClinic is a modern dental clinic, specialized in advanced
          diagnostics and treatment of dental and oral disorders.
        </p>

        <a href="tel:+1234567890">
          <div className="flex justify-center items-center gap-1 bg-[#8774d9] w-fit text-white px-5 py-2 rounded-full my-4 cursor-pointer hover:bg-[#afa3e6]">
            <UilPhone className="w-4" />
            <p>Call Us</p>
          </div>
        </a>
      </div>
      {/* our services */}
      <div className="text-gray-600">
        <div
          className="pb-2 border-b border-gray-400
        "
        >
          <p className="text-[#8774d9] font-semibold">Our Services</p>
        </div>
        <div className="my-4 text-xs grid gap-y-3">
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            DENTAL IMPLANTS
          </p>
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            INVISIBLE BRACES
          </p>
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            ORAL HEALTH CONSULTATION
          </p>
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            PORCLAIN VENEERS
          </p>
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            TEETH WHITENING
          </p>
          <p className="border-b border-gray-400 cursor-pointer hover:text-[#8774d9]">
            EMERGENCY CARE
          </p>
        </div>
      </div>
      {/* opening hours */}
      <div className="">
        <div className="border-b border-gray-400 pb-2">
          <p className="text-[#8774d9] font-semibold">Opening Hours</p>
        </div>
        <div className="grid gap-y-3 my-4">
          <div className="flex justify-between flex-col items-center text-gray-600 text-xs border-b border-gray-400">
            <p className="mb-1">Monday to Saturday</p>
            <p className="mb-1">9.30am to 1.30pm </p>
            <p className="mb-1">4.30pm to 8.00pm</p>
            <p className="mb-1"> Sunday on appointment only</p>
          </div>
          {/* <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Monday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Tuesday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Wednesday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Thursday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Friday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Saturday</p>
            <p>8:00 - 16:00</p>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs border-b border-gray-400">
            <p>Sunday</p>
            <p>-------------- </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
