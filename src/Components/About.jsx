import Footer from "./Footer";
// import TeamImg from "../assets/Dentist3.png";
// import TeamImg1 from "../assets/Dentist4.png";

// import BackgroundImg from "../assets/young-female-patient-visiting-dentist-office (1).jpg";
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
import React from "react";
function About() {
  const features = [
    { icon: UilUserMd, text: "Friendly Doctors" },
    { icon: UilSmile, text: "Family Friendly" },
    { icon: UilGift, text: "Free Consultation" },
    { icon: UilStethoscope, text: "Modern Equipment" },
    { icon: UilBag, text: "Comfortable Office" },
    { icon: UilLocationArrow, text: "Convenient Location" },
    { icon: UilBoltAlt, text: "Satisfaction Guarantee" },
    { icon: UilThermometer, text: "High-Quality Materials" },
    { icon: UilUserMd, text: "Laser Dentistry" },
    { icon: UilClock, text: "Little to no Wait Time" },
    { icon: UilAccessibleIconAlt, text: "Accessibility" },
    { icon: UilDesktopCloudAlt, text: "Digital 3D X-Ray" },
  ];
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
            <img src="/assets/Dentist4.png" alt="" className="object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 my-10  sm:grid-cols-2 md:grid-cols-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-2 border-dashed border border-gray-600 p-2 min-h-[55px] cursor-pointer rounded-md hover:border-[#8774d9]"
            >
              {React.createElement(feature.icon, {
                className: "text-[#8774d9] animate-pulse",
              })}
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* mission */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="rounded-full overflow-hidden flex justify-center items-center max-w-[400px]">
            <img src="/assets/Dentist3.png" alt="" className="!object-cover" />
          </div>
          <div className="px-5 lg:flex justify-center items-center flex-col gap-y-5">
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
            src="/assets/young-female-patient-visiting-dentist-office (1).jpg"
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
