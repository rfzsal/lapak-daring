import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';

const ProductCard = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const image = (() => {
    const randomIndex = Math.floor(Math.random() * 6);

    return <img src={images[randomIndex]} alt="Xiaomi" />;
  })();

  const products = [
    ['Xiaomi Redmi Note 8 Pro 3/32 GB TAM', 'Rp. 2.700.000'],
    ['Xiaomi Redmi Note 8 Pro 4/64 GB TAM', 'Rp. 3.200.000'],
    ['Xiaomi Redmi Note 8 Pro (3/32) TAM', 'Rp. 2.799.000'],
    ['Xiaomi Redmi Note 8 Pro (4/64) TAM', 'Rp. 3.299.000'],
    ['Xiaomi Redmi Note 8 Pro 3/32 GB Garansi Resmi TAM', 'Rp. 2.750.000'],
    ['Xiaomi Redmi Note 8 Pro 4/64 GB Garansi Resmi TAM', 'Rp. 3.250.000']
  ];

  const product = (() => {
    const randomIndex = Math.floor(Math.random() * 6);

    return products[randomIndex];
  })();

  const rating = (() => {
    return Math.floor(Math.random() * 2) + 1 === 1 ? 4 : 5;
  })();

  const totalBuy = (() => {
    return Math.floor(Math.random() * 700) + 500;
  })();

  let stars = [];
  for (let star = 0; star < rating; star++) {
    stars.push(
      <img
        src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/4fede911.svg"
        alt="star"
      />
    );
  }

  return (
    <Link to="/product/details">
      <div className="border border-gray-200 bg-white rounded-md overflow-hidden">
        {image}
        <div class="px-2 py-2">
          <p class="text-sm line-clamp-2">{product[0]}</p>
          <p class="font-semibold text-sm mt-2">{product[1]}</p>
          <div class="flex">
            {stars}
            <p class="text-sm text-gray-400 ml-1">({totalBuy})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
