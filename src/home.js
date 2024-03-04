import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeRazorpay } from './utils/rajorpay';

function Home() {
    const location = useLocation();




    // useEffect(() => {
    //     const loadRazorpay = async () => {
    // const urlParams = new URLSearchParams(window.location.search);

    // const company_name = urlParams.get('company_name');
    // const rajorpay_id = urlParams.get('rajorpay_id');
    // const rajorpay_amount = urlParams.get('rajorpay_amount');
    // const user_email = urlParams.get('user_email');
    // const user_phone = urlParams.get('user_phone');



    //         const script = document.createElement('script');
    //         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    //         script.async = true;
    //         document.body.appendChild(script);
    //         script.onload = () => {
    //             const rzp = new window.Razorpay({
    //                 key: 'rzp_test_NEFkyKlmiaaw6s',
    //                 amount: rajorpay_amount ? rajorpay_amount : 120000,
    //                 currency: 'INR',
    //                 name: company_name ? company_name : "Clickezy",
    //                 order_id: rajorpay_id, // Include the order ID
    //                 description: 'Product or service description',
    //                 prefill: {
    //                     email: user_email ? user_email : "gaurav.kumar@example.com",
    //                     contact: user_phone ? user_phone : "9999999998",
    //                     name: 'itz_biswo',
    //                 },
    //                 handler: function  (response) {
    //                     // window.ReactNativeWebView.postMessage('paymentSuccess');

    //                     if (response.razorpay_payment_id) {
    //                         window.ReactNativeWebView.postMessage('paymentSuccess');
    //                     } else {
    //                         window.ReactNativeWebView.postMessage('paymentFailed');
    //                     }
    //                 },
    //             });

    //             rzp.open();
    //         };
    //     };

    //     loadRazorpay();

    //     return () => {
    //         document.body.removeChild(document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]'));
    //     };
    // }, [location.search]);


    useEffect(() => {
        async function callRajorPay() {
            const response = await initializeRazorpay()
            if (!response) {
                return true
            }

            const urlParams = new URLSearchParams(window.location.search);

            const company_name = urlParams.get('company_name');
            const rajorpay_id = urlParams.get('rajorpay_id');
            const rajorpay_amount = urlParams.get('rajorpay_amount');
            const user_email = urlParams.get('user_email');
            const user_phone = urlParams.get('user_phone');


            var options = {
                // key: "rzp_test_NEFkyKlmiaaw6s", // Enter the Key ID generated from the Dashboard
                // key: "rzp_test_nsM2fPe9xEtgGn", //@Akash_Bhai
                key: "rzp_test_nsM2fPe9xEtgGn", //@Clickezy
                name: company_name,
                currency: "INR",
                amount: rajorpay_amount,
                order_id: rajorpay_id,
                handler: async function (res) {
                    await window.ReactNativeWebView.postMessage('paymentSuccess');

                    console.log(res);
                },
                prefill: {
                    name: 'Akash Pradhan',
                    email: 'akash@gmail.com',
                    contact: '7504587810',
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
