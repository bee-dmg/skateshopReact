import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Image2 from '../imgs/mateo-avila-chinchilla-Yt2bU-A088w-unsplash.jpg';
import Image1 from '../imgs/jared-tomasek-_j65wtWbMbs-unsplash.jpg';
import Image3 from '../imgs/izzy-park-ETqZh_Oe5iE-unsplash.jpg';




const items = [
  {
    src: Image1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: Image2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: Image3, 
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-img-control"  />
        
      </CarouselItem>
    );
  });

  return (
      <div>
              
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-3 carousel-overlay">
            <h2> Bob's Skateshop</h2>
        
    </div>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl/>
      <CarouselControl/>

    </Carousel>
    </div>
  );
}

export default MyCarousel;
