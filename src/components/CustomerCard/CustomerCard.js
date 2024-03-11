import "./CustomerCard.css";

const CustomerCard = (props) => {
  const { productData } = props;
  const { NickName } = productData;
  return (
    <li className="customer-item">
      <div>
        <h1 className="title">New Customer Ids:</h1>
        <div className="product-details">
          <h1 className="title">{NickName}</h1>
        </div>
      </div>
    </li>
  );
};
export default CustomerCard;
