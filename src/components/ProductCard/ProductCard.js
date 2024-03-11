import "./ProductCard.css";

const ProductCard = (props) => {
  const { productData } = props;
  const { Name, UnitPrice } = productData;
  console.log(Name);
  return (
    <li className="product-item">
      <div>
        <h1 className="title">Name: {Name}</h1>
        <div className="product-details">
          <p className="price">Price: Rs {UnitPrice}/-</p>
        </div>
      </div>
    </li>
  );
};
export default ProductCard;
