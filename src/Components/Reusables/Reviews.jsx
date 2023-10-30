import PropTypes from "prop-types";

function Reviews({  Review, Name }) {
  return (
    <div className="p-3 flex justify-center items-center flex-col text-center ">
      {/* <div className="flex justify-center items-center rounded-full overflow-hidden">
        <img src={Photo} alt=" " className="w-28 h-28 object-cover" />
      </div> */}
      {/* <p className="text-gray-800 font-medium">Happy Healthy Smile</p> */}
      <p className="text-gray-600 text-xs my-3">{Review}</p>
      <p className="text-gray-800 font-semibold">{Name}</p>
    </div>
  );
}
Reviews.propTypes = {
  Photo: PropTypes.string.isRequired,
  Review: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};
export default Reviews;
