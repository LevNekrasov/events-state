import ShopCard from './ShopCard';

export default function CardsView({ products }) {
  const cardList = products.map((product, index) => (
    <ShopCard product={product} key={index} />
  ));

  return <ul className="product-card_list">{cardList}</ul>;
}