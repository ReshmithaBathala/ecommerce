import "./RatingCard.css";

const RatingCard = (props) => {
  const { productData } = props;
  const { Rate, CreateDate } = productData;
  return (
    <li className="rating-item">
      <div>
        <h1 className="title">Date: {CreateDate}</h1>
        <div className="product-details">
          <p className="rating">Rating: {Rate}/5</p>
        </div>
      </div>
    </li>
  );
};
export default RatingCard;
