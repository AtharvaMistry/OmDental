import "../../App.css";
import PropTypes from "prop-types";

function ServicesHome({ ServicesImg, ServicesTitle, ServicesText }) {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-800 border-dashed px-5 py-2 rounded-md bgServiceHome hover:border-[#8774d9]">
      <div className="border border-dashed bg-white rounded-full p-2 w-fit">
        <img src={ServicesImg} alt="" className="w-8" />
      </div>
      <p className="text-gray-800 font-medium my-2">{ServicesTitle}</p>
      <p className="text-gray-600 text-sm">{ServicesText}</p>
    </div>
  );
}

ServicesHome.propTypes = {
  ServicesImg: PropTypes.string.isRequired,
  ServicesTitle: PropTypes.string.isRequired,
  ServicesText: PropTypes.string.isRequired,
};

export default ServicesHome;
