import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import places from '../assets/places';
import Place from './Place';

const Places = () => {
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
      <div className='container mt-10 mb-32'>
        <h1 className='text-balance title'>Places to Visit in Sri Lanka</h1>
        <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={600}
        keyBoardControl={true}
        customTransition="all 0.5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        {places.map((place, index) => (
            <Place key={index} place={place} />
        ))}
        </Carousel>
      </div>
  );
};

export default Places;
