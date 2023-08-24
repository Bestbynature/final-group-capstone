import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setcwidth, fetchFlights } from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const Flights = () => {
  const carouselRef = useRef();
  const dispatch = useDispatch();
  const { cwidth, active, flights } = useSelector((store) => store.flights);

  useEffect(() => {
    dispatch(fetchFlights());
    setTimeout(() => {
      if (carouselRef.current) {
        dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth));
      }
    }, 2000);
  }, [dispatch, flights.length]);

  const moveCarousel = (direction) => {
    const percentage = 0.5;
    const scrollAmount = Math.floor(carouselRef.current.offsetWidth * percentage);

    if (direction === 'left') {
      dispatch(setcwidth('left'));
      const newScrollX = carouselRef.current.scrollLeft - scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollX, behavior: 'smooth' });
    } else if (direction === 'right') {
      dispatch(setcwidth('right'));
      const newScrollX = carouselRef.current.scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollX, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel">
      <AddFlight />
      <div>&nbsp;</div>
      <div className="carousel-header">
        <h1>Flight Destinations</h1>
        <p>Please select a travel destination</p>
      </div>
      <div>&nbsp;</div>
      <div
        className={active === 'left' ? 'left clickactive' : 'left'}
        onClick={() => moveCarousel('left')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            moveCarousel('left');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <i className="fa-solid fa-caret-left" />
    </div>


      <motion.div ref={carouselRef} className="outer-carousel" whileTap={{ cursor: 'grabbing' }} onScroll={() => dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth))}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -cwidth }} className="inner-carousel">
          {flights.map((flightobj) => {
            const {
              picture, name, basePrice, availableSlots, id,
            } = flightobj;
            return (
              <Link to={`/details/${id}`} key={id}>
                <motion.div className="item">
                  <div className="item-image-container"><img src={picture} alt={name} title={name} /></div>
                  <div className="text">
                    <h3>{name}</h3>
                    <p>
                      Price: $
                      {basePrice}
                    </p>
                    <p>
                      Available Slots:
                      {availableSlots}
                    </p>
                    <div className="circle-cont">
                      <div className="circle"><i className="fa-brands fa-facebook-f" /></div>
                      <div className="circle"><i className="fa-brands fa-twitter" /></div>
                      <div className="circle"><i className="fa-brands fa-square-instagram" /></div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}

        </motion.div>
      </motion.div>
      <div
        className={active === 'right' ? 'right clickactive' : 'right'}
        onClick={() => moveCarousel('right')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            moveCarousel('right');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <i className="fa-solid fa-caret-right" />
      </div>

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  );
};

export default Flights;
