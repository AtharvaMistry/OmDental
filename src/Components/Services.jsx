import "./Style.css";
import Footer from "./Footer";
import Button from "./Reusables/Button";
import GeneralIconImg from "../assets/icons8-dental-91.png";
import CosmeticIconImg from "../assets/icons8-dental-filling-50.png";
import RestorativeIconImg from "../assets/icons8-dental-65.png";
import EmergencyIconImg from "../assets/icons8-dental-64.png";
import ServicesCard from "./Reusables/ServicesCard";
import Contact from "./Reusables/Contact";


function Services() {
  const ServicesArray = [
    {
      IconImg: GeneralIconImg,
      Name: "General Dental Care",
      Text: "General dentistry is for patients of all ages offering complete, comprehensive dental health care.",
    },
    {
      IconImg: CosmeticIconImg,
      Name: "Cosmetic Dentistry",
      Text: "A beautiful smile contributes to a better mood and boosts self-esteem.",
    },
    {
      IconImg: RestorativeIconImg,
      Name: "Restorative Dentistry",
      Text: "We work toward creating youthful smiles for patients whose natural teeth require replacement.",
    },
    {
      IconImg: EmergencyIconImg,
      Name: "Emergency Care",
      Text: "Do not hesitate to seek help. Urgent dental care is provided usually the same day.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 px-4 py-5 sm:grid-cols-1 md:px-20   my-10">
        <div className="mb-10">
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
          <a href="tel:+916353846481">
            <Button Name="Request Appointment" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-4 sm:gap-5">
          <div className="col-span-1 w-fit mb-5  sm:col-span-2 sm:mt-10 md:col-span-4">
            <p className="text-gray-800 text-center text-xl font-medium border-b border-gray-800 border-dashed">
              OUR SERVICES
            </p>
          </div>
          {ServicesArray.map((service, index) => (
            <ServicesCard
              key={index}
              GeneralIconImg={service.IconImg}
              ServiceName={service.Name}
              Description={service.Text}
            />
          ))}
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
