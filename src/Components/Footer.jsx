import { UilPhone, UilArrowUp } from "@iconscout/react-unicons";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative grid bg-[#c7bfec] px-4 sm:grid-cols-3 gap-5 md:px-20 py-10">
      <button
        className="absolute top-[-40px] right-2 border border-gray-700 rounded-full  p-1"
        onClick={handleScrollToTop}
      >
        <UilArrowUp className="text-[#8744d9]" />
      </button>
      <div>
        <div>
          <p className="text-[#8774d9] font-semibold">OmDentalCare</p>
        </div>
        <p className="text-sm my-3 text-gray-600">
          OmDentalCare is a modern dental clinic, specialized in advanced
          diagnostics and treatment of dental and oral disorders.
        </p>

        <a href="tel:+916353846481">
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
            <p className="mb-1">9.30am to 12.30pm </p>
            <p className="mb-1">4.30pm to 8.00pm</p>
            <p className="mb-1"> Sunday on appointment only</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
