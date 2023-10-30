import { UilRegistered } from "@iconscout/react-unicons";
import HomeImg2 from "../assets/Dentist.png";
import HomeImg3 from "../assets/Dentist2.png";
import ServicesHome from "./Reusables/ServicesHome";
import Services1Img from "../assets/icons8-dental-32.png";
import Services2Img from "../assets/icons8-dental-48.png";
import Services3Img from "../assets/icons8-dental-64.png";
import Services4Img from "../assets/icons8-dental-65.png";
import Services5Img from "../assets/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw.jpg";
import Services6Img from "../assets/icons8-dental-braces-64.png";
import ReviewImg from "../assets/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign-removebg-preview.png";
import DoctorImg from '../assets/Doctor.jpg';
import { Carousel } from "antd";
import "../App.css";
import Reviews from "./Reusables/Reviews";
import Footer from "./Footer";
import Doctor from "./Reusables/Doctor";
function Home() {
  const ServicesHomeArray = [
    {
      img: Services1Img,
      title: "General Dental Care",
      text: "General dentistry is for patients of all ages offering complete, comprehensive dental health care.",
    },
    {
      img: Services2Img,
      title: "Cosmetic Dentistry",
      text: "A beautiful smile contributes to a better mood and boosts self-esteem.",
    },
    {
      img: Services3Img,
      title: "Restorative Dentistry",
      text: "We work toward creating youthful smiles for patients whose natural teeth require replacement.",
    },
    {
      img: Services4Img,
      title: "Emergency Care",
      text: "Do not hesitate to seek help. Urgent dental care is provided usually the same day.",
    },
  ];
  // reviews
  const ReviewArray = [
    {
      Photo: DoctorImg,
      Review:
        "Great dentist! Dr.Navdip and the team are super friendly and professional. I felt at ease throughout the entire visit. My teeth feel amazing after the cleaning. Highly recommend!",
      Name: "Jaimeen Makavana",
    },
    {
      Photo: DoctorImg,
      Review:
        "Had a painless root canal procedure here. Dr. Navdip was very gentle, and the staff made sure I was comfortable. I'm so relieved, and my tooth feels as good as new!",
      Name: "Janak Ladumor",
    },
    {
      Photo: DoctorImg,
      Review:
        "Amazing experience at this dental clinic! From the moment I walked in, I was greeted with a warm smile. Dr. explained everything clearly and made my orthodontic journey a breeze. Smiling confidently now!",
      Name: "Umesh Boricha",
    },
  ];

  // carousel
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      {/* welcome */}
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-20">
        <div className="mt-10 md:order-2 lg:flex justify-center items-center flex-col">
          <p className="text-3xl text-gray-800 font-bold">
            WELCOME TO OmDentalClinic
          </p>
          <p className="my-5 text-gray-700">
            OmDentalClinic is a modern dental clinic, specialized in advanced
            diagnostics and treatment of dental and oral disorders. We offer
            comprehensive services from all fields of dentistry. In addition to
            high-end dental equipment, all services are provided in a
            comfortable, luxury environment. New patients are welcomed with a
            complimentary oral health consultation.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[400px]">
            <img src={HomeImg2} alt="" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-20 ">
        <div className="mt-10 lg:flex justify-center items-center flex-col">
          <p className="text-3xl text-gray-800 font-bold">
            Bring the Bright Smile with the Healthy Dental
          </p>
          <p className="my-5 text-gray-700">
            We provide comprehensive and Personalized Dental Services,
            Harnessing Advanced Techniques and Expertise to keep Your Smile
            Bright, Healthy and Confident.
          </p>
          <div className="flex justify-start items-start gap-3 flex-col sm:flex-row sm:items-center">
            <button className="bg-[#8774d9] px-3 py-1 rounded-full text-white hover:bg-[#afa3e6]">
              Make an Appointment
            </button>
            <button className="border border-gray-700 px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200">
              Online Consultation
            </button>
          </div>
          <div className="flex justify-start items-start gap-2 mt-5">
            <UilRegistered className="text-[#8774D9] w-12" />
            <div>
              <p className="text-gray-800 text-xs font-semibold">
                Medical Certificates
              </p>
              <p className="text-gray-700 text-xs ">
                The Doctor has undergone medical examination conducted with
                certified professional treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[400px]">
            <img src={HomeImg3} alt="" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 gap-5 my-10 sm:grid-cols-2 md:px-20">
        <ServicesHome
          ServicesImg={ServicesHomeArray[0].img}
          ServicesTitle={ServicesHomeArray[0].title}
          ServicesText={ServicesHomeArray[0].text}
        />

        <ServicesHome
          ServicesImg={ServicesHomeArray[1].img}
          ServicesTitle={ServicesHomeArray[1].title}
          ServicesText={ServicesHomeArray[1].text}
        />

        <ServicesHome
          ServicesImg={ServicesHomeArray[2].img}
          ServicesTitle={ServicesHomeArray[2].title}
          ServicesText={ServicesHomeArray[2].text}
        />

        <ServicesHome
          ServicesImg={ServicesHomeArray[3].img}
          ServicesTitle={ServicesHomeArray[3].title}
          ServicesText={ServicesHomeArray[3].text}
        />
      </div>

      {/* team */}
      <div className="grid px-4 md:px-20">
        <Doctor />
      </div>

      {/* Reviews */}
      <div className="grid md:px-20 my-10">
        <div className="flex justify-center items-center">
          <p className="text-gray-800 text-xl font-medium border-b border-gray-800 border-dashed">
            Happy Customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <Carousel afterChange={onChange}>
              <Reviews
                Photo={ReviewArray[0].Photo}
                Review={ReviewArray[0].Review}
                Name={ReviewArray[0].Name}
              />
              <Reviews
                Photo={ReviewArray[1].Photo}
                Review={ReviewArray[1].Review}
                Name={ReviewArray[1].Name}
              />

              <Reviews
                Photo={ReviewArray[2].Photo}
                Review={ReviewArray[2].Review}
                Name={ReviewArray[2].Name}
              />
            </Carousel>
          </div>
          <div>
            <img src={ReviewImg} alt="" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
