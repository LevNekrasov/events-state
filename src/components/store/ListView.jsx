import ShopItem from './ShopItem';

export default function ListView({ products }) {
  const cardList = products.map((product, index) => (
    <ShopItem product={product} key={index} />
  ));

  return <ul className="product_list">{cardList}</ul>;
}