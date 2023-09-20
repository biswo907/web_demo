import React from 'react'
import { useLocation } from 'react-router-dom';


function Layout() {


    const location = useLocation();

    // Extract the URL parameters from the location object
    const searchParams = new URLSearchParams(location.search);

    // Get the values of booking_id and image_id from the URL parameters
    const bookingId = searchParams.get('booking_id');
    const imageId = searchParams.get('image_id');
    const value = 10


    return (
        <div>
            <h1>{bookingId ? bookingId : "12"}</h1>
            <h1>{imageId ? imageId : "12....."}</h1>
            <h1>{value}</h1>
        </div>
    )
}

export default Layout