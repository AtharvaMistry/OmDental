import Services5Img from "../../assets/Doctor.jpg";
function Doctor() {
  return (
    <div className="flex justify-center items-center flex-col px-4 md:px-20">
      <p className="text-gray-800 text-xl font-medium border-b border-gray-800 border-dashed">
        MEET THE DENTIST
      </p>

      <div className="flex justify-center items-center gap-5 flex-col mt-5 sm:flex-row">
        <p className="text-gray-600 text-sm max-w-[400px] my-5 order-2 ">
          Dr.Navdip is a trusted dentist with strong education and training.
          After completing college, they continued to learn through internships.
          Your first visit will be comfortable and informative. With Dr.navdip,
          your dental health is in trusted hands.
        </p>
        <div className="rounded-full overflow-hidden ">
          <img src={Services5Img} alt=" " className="w-36 h-36 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Doctor;
