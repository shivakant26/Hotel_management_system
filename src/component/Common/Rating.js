import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = () => {
  return (
    <>
      <div className="rating">
        <span className="color_full_star">
          <AiFillStar />
        </span>
        <span className="color_full_star">
          <AiFillStar />
        </span>
        <span className="color_full_star">
          <AiFillStar />
        </span>
        <span className="color_full_star">
          <AiFillStar />
        </span>
        <span>
          <AiOutlineStar />
        </span>
      </div>
    </>
  );
};

export default Rating;
