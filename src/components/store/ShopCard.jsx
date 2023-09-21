export default function ShopCard({ product }) {
  const { name, price, color, img } = product;

  return (
    <li className="product-card-list_item">
      <header>
        <h3 className="product-card_name">{name}</h3>
        <div className="product-card_color">{color}</div>
      </header>
      <div className="image_wrapper">
        <img className="product-card_img" src={img} />
      </div>
      <div className="product-card_buy">
        <div className="product-card_price">{`$${price}`}</div>
        <button className="product-card_add-btn" type="button">
          Add to cart
        </button>
      </div>
    </li>
  );
}