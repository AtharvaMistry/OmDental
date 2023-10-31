import PropTypes from "prop-types";

function Reviews({  Review, Name }) {
  return (
    <div className="p-3 flex justify-center items-center flex-col text-center ">
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
