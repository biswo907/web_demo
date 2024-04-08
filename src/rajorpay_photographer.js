import React, { useEffect } from 'react';
import { initializeRazorpay } from './utils/rajorpay';

export const RajorpayPhotographer = () => {

    useEffect(() => {
        async function callRajorPay() {

            const urlWithoutFragment = window.location.hash.split("#")[1]
            const urlParams = new URLSearchParams(urlWithoutFragment.split('?')[1]);

            // Retrieve URL parameters
            const company_name = urlParams.get('company_name');
            const rajorpay_id = urlParams.get('rajorpay_id');
            const rajorpay_amount = urlParams.get('rajorpay_amount');
            const user_email = urlParams.get('user_email');
            const user_phone = urlParams.get('user_phone');

            try {
                const response = await initializeRazorpay();
                if (!response) {
                    console.error("Failed to initialize Razorpay");
                    return;
                }



                console.log("URL Parameters:", {
                    company_name,
                    rajorpay_id,
                    rajorpay_amount,
                    user_email,
                    user_phone
                });

                // Check if any required parameter is missing or null
                if (!company_name || !rajorpay_id || !rajorpay_amount || !user_email || !user_phone) {
                    console.error("Missing or invalid URL parameters");
                    return;
                }

                // Razorpay options...

                var options = {
                    key: "rzp_test_sD259Ct39v0khJ", //@Clickezy
                    name: company_name,
                    currency: "INR",
                    amount: rajorpay_amount,
                    order_id: rajorpay_id,
                    handler: async function (res) {
                        await window.ReactNativeWebView.postMessage('paymentSuccess');


                    },
                    prefill: {
                        name: "Biswajit Dash",
                        email: "example@gmail.com",
                        contact: 6370558953,
                    },
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();

            } catch (error) {
                console.error("Error in initializing Razorpay:", error);
            }
        }

        callRajorPay();
    }, []);

    return <span>
    </span>; // or any other component if needed
};
