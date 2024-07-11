import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem';

const CarouselHome = () => {
  const items = [
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg' },
  ];

  return (
    <Carousel className="max-w-full ">
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselHome;