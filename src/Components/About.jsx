import Footer from "./Footer";
import TeamImg from "../assets/Dentist3.png";
import TeamImg1 from "../assets/Dentist4.png";

import BackgroundImg from "../assets/young-female-patient-visiting-dentist-office (1).jpg";
import "../App.css";
import "./Style.css";
import {
  UilUserMd,
  UilSmile,
  UilGift,
  UilStethoscope,
  UilBag,
  UilLocationArrow,
  UilBoltAlt,
  UilThermometer,
  UilClock,
  UilAccessibleIconAlt,
  UilDesktopCloudAlt,
} from "@iconscout/react-unicons";
import Button from "./Reusables/Button";
import Doctor from "./Reusables/Doctor";
function About() {
  return (
    <>
      <div className="grid grid-cols-1 px-4 md:px-20 py-5">
        <div className="grid grid-cols-1  sm:grid-cols-2 ">
          <div className="flex flex-col justify-center items-start">
            <p className="text-gray-800 font-semibold">
              WE ARE <span className="text-[#8774d9]">OmDentalCare</span>
            </p>
            <p className="text-gray-600 text-sm my-2">
              Creating Beautiful Smiles Since 2023
            </p>
            <p className="text-gray-600 text-xs">
              OmDentalCare is a modern dental clinic, specialised in advanced
              diagnostics and treatment of dental disorders. We guarantee
              comprehensive diagnostics and offer various forms of dental care,
              surgical procedures, and cosmetic dental services.
            </p>
          </div>
          <div className="max-w-[400px] overflow-hidden">
            <img src={TeamImg1} alt="" className="object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 my-10  sm:grid-cols-2 md:grid-cols-4 ">
          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilUserMd className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Friendly Doctors</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilSmile className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Family Friendly</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilGift className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Free Consultation</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilStethoscope className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Modern Equipment</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilBag className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Comfortable Office</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilLocationArrow className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Convenient Location</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilBoltAlt className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Satisfaction Guarantee</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilThermometer className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">High-Quality Materials</p>
          </div>
          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilUserMd className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Laser Dentistry</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilClock className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Little to no Wait Time</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilAccessibleIconAlt className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Accessibility</p>
          </div>

          <div className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]">
            <UilDesktopCloudAlt className="text-[#8774d9]" />
            <p className="text-gray-600 text-sm">Digital 3D X-Ray</p>
          </div>
        </div>

        {/* mission */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="rounded-full overflow-hidden flex justify-center items-center max-w-[400px]">
            <img src={TeamImg} alt="" className="!object-cover" />
          </div>
          <div className="px-5 lg:flex justify-center items-center flex-col ">
            <div className="mb-5 border border-dashed border-gray-700 rounded-md p-2 lg:mb-0">
              <p className="text-sm font-medium text-gray-800">OUR MISSION</p>
              <p className="text-xs my-2 text-gray-600">
                Our mission at OmDentalCare, the dental clinic in Anand, is to
                provide exceptional dental services with a genuine commitment to
                the well-being of our patients. We are dedicated to ensuring the
                oral health and satisfaction of every individual we serve. Your
                smile is our priority, and we&apos;re here to make it the best
                it can be.
              </p>
            </div>
            <div className="border border-dashed border-gray-700 rounded-md p-2">
              <p className="text-sm font-medium text-gray-800">OUR APPROACH</p>
              <p className="text-xs my-2 text-gray-600">
                Our approach at OmDentalCare is rooted in a patient-centric
                philosophy. We believe in personalized, compassionate, and
                quality dental care. Our team of experienced professionals is
                committed to creating a welcoming and comfortable environment
                for our patients. We listen to your needs, provide tailored
                solutions, and deliver top-notch dental services with a genuine
                dedication to your oral health and satisfaction.
              </p>
            </div>
          </div>
        </div>
        {/* doctor */}
        <div className="grid mt-10 ">
          <Doctor />
        </div>
        {/* consultation */}
        <div className="grid max-h-[300px] overflow-hidden my-10 relative">
          <img
            src={BackgroundImg}
            alt=""
            className="object-center opacity-[0.5]"
          />
          <div className="absolute top-[10%] right-[0%] sm:top-[40%] sm:right-[10%] lg:right-[20%] xl:right-[30%] 2xl:right-[50%}">
            <p className="text-2xl font-medium mb-2 text-white">
              Schedule a Complimentary Consultation
            </p>
            <a href="tel:+916353846481">
              <Button Name="REQUEST APPOINTMENT" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
