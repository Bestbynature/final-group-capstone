import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlightDetails } from '../redux/flights/flightsSlice';
import ReserveFlight from './ReserveFlight';
import AddFlight from './AddFlight';

const FlightDetails = () => {
    const { index } = useParams();
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(fetchFlightDetails(parseInt(index)))
    }, [dispatch])
    
    const { flightDetails } = useSelector(store => store.flights)
  
    const { picture, name, base_price, available_slots, } = flightDetails

  return (
   
    <div className='details'>
        <AddFlight />
        <div></div>
        <div></div>
        <div></div>
        <div>&nbsp;</div>
        <div className='big-image'>
            <img src={picture} alt={name} title={name} className='image2'/>
        </div>
        <div className='more-details'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Services</th>
                    <th scope="col" className='text-end'>Remarks</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    <tr>
                        <td><strong>Name </strong></td>
                        <td className='text-end'>{name}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td className='text-end'>{base_price}</td>
                    </tr>
                    <tr>
                        <td>Slots Available</td>
                        <td className='text-end'>{available_slots}</td>
                    </tr>
                    <tr>
                        <td>Emergency Services</td>
                        <td className='text-end'>Available 24/7</td>
                    </tr>
                </tbody>
            </table>
            <p className='mt-3'><strong>5.9% discount to all new customers</strong></p>
            <p className='btn width-full'><Link to='/' > Discover more flights</Link></p>
            <div className='reserve'>
                {/* write a navlink to reserve */}
                <Link to='/reserve_flight' className='btn btn-primary width-full'>Reserve</Link>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default FlightDetails