export default function ShopItem({ product }) {
  const { name, price, color, img } = product;

  return (
    <li className="product-list_item">
      <div className="item_container">
        <h3 className="item_name">{name}</h3>
        <div className="image_wrapper">
          <img className="item_img" src={img} />
        </div>
        <div className="item_color">{color}</div>
        <div className="item_price">{`$${price}`}</div>
        <button className="item_add-btn" type="button">
          Add to cart
        </button>
      </div>
    </li>
  );
}