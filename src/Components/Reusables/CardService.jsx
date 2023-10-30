import "../Style.css";
import PropTypes from "prop-types";

function CardService({ CardServiceImg, CardServiceName, CardServiceIcon }) {
  return (
    <div className="glassmorphism overflow-hidden p-3 min-h-full rounded-md">
      <img src={CardServiceImg} alt="" className="" />
      <div className="flex justify-between items-center py-3">
        <p>{CardServiceName}</p>
        <img src={CardServiceIcon} alt="" className="w-8" />
      </div>
    </div>
  );
}
CardService.propTypes = {
  CardServiceImg: PropTypes.string.isRequired,
  CardServiceName: PropTypes.string.isRequired,
  CardServiceIcon: PropTypes.string.isRequired,
};

export default CardService;
