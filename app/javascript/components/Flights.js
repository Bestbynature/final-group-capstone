import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setcwidth, fetchFlights } from '../redux/flights/flightsSlice';


const Flights = () => {
  const carouselRef = useRef()
  const dispatch = useDispatch()
  const { cwidth, active, flights, user } = useSelector((store) => store.flights)
  
  useEffect(() => {
    dispatch(fetchFlights());
    setTimeout(() => {
      if (carouselRef.current) {
        dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth));
      }
      console.log(user)
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
    <div className='carousel'>
    <div>&nbsp;{user}</div>
      <div className='carousel-header'>
        <h1>Flight Destinations</h1>
        <p>Please select a travel destination</p>
      </div>
      <div>&nbsp;</div>
      <div className={active === 'left' ? "left clickactive" : "left"} onClick={()=>moveCarousel('left')}>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      {/* </div> */}
      
      <motion.div ref={carouselRef} className='outer-carousel' whileTap={{cursor: "grabbing"}} onScroll={()=>dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth))}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -cwidth}} className="inner-carousel">
        {flights.map((flightobj, index) => {
  const { picture, name, base_price, available_slots } = flightobj;
  return (
    <motion.div className='item' key={index}>
      <img src={picture} alt={index} title={name} />
      <div className='text'>
        <h3>{name}</h3>
        <p>Price: ${base_price}</p> {/* Display base price */}
        <p>Available Slots: {available_slots}</p> {/* Display available slots */}
        <div className="circle-cont">
          <div className="circle"><i className="fa-brands fa-facebook-f"></i></div>
          <div className="circle"><i className="fa-brands fa-twitter"></i></div>
          <div className="circle"><i className="fa-brands fa-square-instagram"></i></div>
        </div>
      </div>
    </motion.div>
  );
})}

        </motion.div>
      </motion.div>
      <div className={active === 'right' ? "right clickactive" : "right"} onClick={()=>moveCarousel("right")}>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  )
}

export default Flights