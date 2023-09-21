import { useState } from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

import products from '../../constants/products';

export default function Store() {
  const [icon, setIcon] = useState('view_list');
  const onSwitch = () => {
    setIcon((prev) => (prev === 'view_module' ? 'view_list' : 'view_module'));
  };

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === 'view_list' ? (
        <CardsView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
}