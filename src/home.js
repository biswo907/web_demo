import React, { useEffect, useState } from 'react';
import { initializeRazorpay } from './utils/rajorpay';

function Home() {




    useEffect(() => {
        async function callRajorPay() {
            const response = await initializeRazorpay()
            if (!response) {
                return true
            }

            const urlParams = new URLSearchParams(window.location.search);
            const payload_data = urlParams.get('payload');
            const rajorpay_data = urlParams.get('rajorpay_data');
            const authToken = urlParams.get('authToken');
            // console.log('payload_data', JSON.parse(payload_data));
            console.log('payload_data', JSON.parse(payload_data));

            const userDetails = JSON.parse(payload_data)

            if (!payload_data && !rajorpay_data) {
                return;
            }


            var options = {
                key: "rzp_test_sD259Ct39v0khJ", //@Clickezy
                name: "PairaLabs Private Limited",
                currency: JSON.parse(rajorpay_data)?.currency,
                amount: JSON.parse(rajorpay_data)?.amount,
                order_id: JSON.parse(rajorpay_data)?.id,
                handler: async function (res) {
                    // await window.ReactNativeWebView.postMessage('paymentSuccess');
                    console.log("cameeeeeeeeeeeeeeeee", JSON.parse(payload_data));

                    const parsedData = JSON.parse(payload_data);


                    const url = 'https://prepod.store.api.clickezy.in/api/v1/store/place/order'; // Assuming this is the correct endpoint
                    const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    };

                    try {
                        const response = await fetch(url, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(parsedData)
                        });

                        if (!response.ok) {
                            console.log("RESPONSE NOT OK", response);
                        }

                        console.log("RESPONSE OK............", response);
                        const data = await response.json();
                        console.log('Data:', data);
                        await window.ReactNativeWebView.postMessage('paymentSuccess');
                    } catch (error) {
                        console.error('Error:', error);
                    }

                },
                prefill: {
                    name: JSON.parse(userDetails?.user_data)?.name,
                    email: "example@gmail.com",
                    contact: JSON.parse(userDetails?.user_data)?.phone,
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }




        callRajorPay()
    }, [])


    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
}

export default Home;
