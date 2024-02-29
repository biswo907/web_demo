import React, { useEffect, useState } from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom';
import storeConfig from './www/http';
import RazorpayComponent from './rajorpay';

function Home() {
    const [addToCart, setAddToCart] = useState()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);


    console.log("Serch Params", searchParams);



    function goBackToReactNative() {



    }



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RazorpayComponent />
        </div>
    )
}

export default Home