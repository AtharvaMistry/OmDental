import PropTypes from "prop-types";


function ServicesCard({
  GeneralImg,
  GeneralIconImg,
  ServiceName,
  Description,
}) {
  return (
    <div className="relative min-h-[200px] h-[250px] max-h-[250px]">
      <img src={GeneralImg} alt="" className="object-cover w-full h-full" />
      <div className="absolute top-[5%] right-[5%] left-[5%] bottom-[5%] flex justify-center flex-col items-center text-center  glassmorphism1">
        <p className="text-gray-900 text-sm font-medium mb-3">{ServiceName}</p>
        <div className="border rounded-full border-gray-700 p-1">
          <img src={GeneralIconImg} alt="" className="w-14" />
        </div>
        <p className="text-xs text-gray-900 my-2">{Description}</p>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  GeneralImg: PropTypes.string.isRequired,
  GeneralIconImg: PropTypes.string.isRequired,
  ServiceName: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  
};
export default ServicesCard;
