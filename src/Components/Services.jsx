import { Carousel } from "antd";
import "./Style.css";
import Footer from "./Footer";
import Button from "./Reusables/Button";
import CardService from "./Reusables/CardService";
import TeethProtection from "../assets/icons8-tooth-protection-64.png";
import Whitening from "../assets/young-female-patient-visiting-dentist-office (1).jpg";
import DentalImplant from "../assets/icons8-tooth-implant-64.png";
import Porcelain from "../assets/icons8-dental-32.png";
import GeneralImg from "../assets/feeling-happy-surprised-realizing-solution-idea.jpg";
import GeneralIconImg from "../assets/icons8-dental-91.png";
import CosmeticImg from "../assets/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw.jpg";
import CosmeticIconImg from "../assets/icons8-dental-filling-50.png";
import RestorativeImg from "../assets/young-female-patient-visiting-dentist-office (1).jpg";
import RestorativeIconImg from "../assets/icons8-dental-65.png";
import EmergencyImg from "../assets/dentist-doing-check-up-patient.jpg";
import EmergencyIconImg from "../assets/icons8-dental-64.png";
import ServicesCard from "./Reusables/ServicesCard";
import Contact from "./Reusables/Contact";
function Services() {
  const ServicesArray = [
    {
      Img: GeneralImg,
      IconImg: GeneralIconImg,
      Name: "General Dental Care",
      Text: "General dentistry is for patients of all ages offering complete, comprehensive dental health care.",
    },
    {
      Img: CosmeticImg,
      IconImg: CosmeticIconImg,
      Name: "Cosmetic Dentistry",
      Text: "A beautiful smile contributes to a better mood and boosts self-esteem.",
    },
    {
      Img: RestorativeImg,
      IconImg: RestorativeIconImg,
      Name: "Restorative Dentistry",
      Text: "We work toward creating youthful smiles for patients whose natural teeth require replacement.",
    },
    {
      Img: EmergencyImg,
      IconImg: EmergencyIconImg,
      Name: "Emergency Care",
      Text: "Do not hesitate to seek help. Urgent dental care is provided usually the same day.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:px-20  my-10">
        <div className="">
          <p>TREAT YOURSELF TO</p>
          <p className="text-2xl text-gray-800">
            Comprehensive Dental Services
          </p>
          <p className="my-3 text-gray-600 text-sm">
            At our clinic, we offer comprehensive services from all fields of
            dentistry. In addition to high-end dental equipment and high-quality
            materials, all services are provided in a comfortable, luxury
            environment. New patients are welcomed with a complimentary oral
            health consultation.
          </p>
          <Button Name="Request Appointment" />
        </div>

        <div className="grid grid-cols-1 pb-10 sm:grid-cols-4 sm:gap-5">
          <div className="col-span-2 w-fit  sm:col-span-4 sm:mt-10">
            <p className="text-gray-800 text-xl font-medium border-b border-gray-800 border-dashed">
              OUR SERVICES
            </p>
          </div>
          <div>
            <ServicesCard
              GeneralImg={ServicesArray[0].Img}
              GeneralIconImg={ServicesArray[0].IconImg}
              ServiceName={ServicesArray[0].Name}
              Description={ServicesArray[0].Text}
            />
          </div>
          <div>
            <ServicesCard
              GeneralImg={ServicesArray[1].Img}
              GeneralIconImg={ServicesArray[1].IconImg}
              ServiceName={ServicesArray[1].Name}
              Description={ServicesArray[1].Text}
            />
          </div>
          <div>
            <ServicesCard
              GeneralImg={ServicesArray[2].Img}
              GeneralIconImg={ServicesArray[2].IconImg}
              ServiceName={ServicesArray[2].Name}
              Description={ServicesArray[2].Text}
            />
          </div>
          <div>
            <ServicesCard
              GeneralImg={ServicesArray[3].Img}
              GeneralIconImg={ServicesArray[3].IconImg}
              ServiceName={ServicesArray[3].Name}
              Description={ServicesArray[3].Text}
            />
          </div>
        </div>

        <div className="border-t border-dashed border-gray-700">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
