import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setcwidth, fetchFlights } from '../redux/flights/flightsSlice';


const Flights = () => {
  const carouselRef = useRef()
  const dispatch = useDispatch()
  const { cwidth, active, flights } = useSelector((store) => store.flights)
  
  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth));
  }, [cwidth, dispatch]);
  
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
      <div>&nbsp;</div>
      <div className='carousel-header'>
        <h1>Flight Destinations</h1>
        <p>Please select a travel destination</p>
      </div>
      <div>&nbsp;</div>
      <div className='button-slot'>
        <div className={active === 'left' ? "left clickactive" : "left"} onClick={()=>moveCarousel('left')}>
        <i class="fa-solid fa-caret-left"></i>
        </div>
      </div>
      
      <motion.div ref={carouselRef} className='outer-carousel' whileTap={{cursor: "grabbing"}} onScroll={()=>dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth))}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -cwidth}} className="inner-carousel">
          {flights.map((flightobj, index) => {
            const { picture, name } = flightobj
            return (
              <motion.div className='item'>
                <img src={picture} key={index} alt={index} title={name}/>
                <div className='text'>
                  <h3>{name}</h3>
                  <p>*******************</p>
                  <div className="circle-cont">
                    <div className="circle"><i className="fa-brands fa-facebook-f"></i></div>
                    <div className="circle"><i className="fa-brands fa-twitter"></i></div>
                    <div className="circle"><i className="fa-brands fa-square-instagram"></i></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      <div className="button-slot">
        <div className={active === 'right' ? "right clickactive" : "right"} onClick={()=>moveCarousel('right')}>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  )
}

export default Flights