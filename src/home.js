import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();




    useEffect(() => {
        const loadRazorpay = async () => {
            const urlParams = new URLSearchParams(window.location.search);

            const company_name = urlParams.get('company_name');
            const rajorpay_id = urlParams.get('rajorpay_id');
            const rajorpay_amount = urlParams.get('rajorpay_amount');
            const user_email = urlParams.get('user_email');
            const user_phone = urlParams.get('user_phone');



            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: rajorpay_amount ? rajorpay_amount : 120000,
                    currency: 'INR',
                    name: company_name ? company_name : "Clickezy",
                    order_id: rajorpay_id, // Include the order ID
                    description: 'Product or service description',
                    prefill: {
                        email: user_email ? user_email : "gaurav.kumar@example.com",
                        contact: user_phone ? user_phone : "9999999998",
                    },
                    handler: function (response) {
                        // window.ReactNativeWebView.postMessage('paymentSuccess');

                        if (response.razorpay_payment_id) {
                            window.ReactNativeWebView.postMessage('paymentSuccess');
                        } else {
                            window.ReactNativeWebView.postMessage('paymentFailed');
                        }
                    },
                });

                rzp.open();
            };
        };

        loadRazorpay();

        return () => {
            document.body.removeChild(document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]'));
        };
    }, [location.search]);

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
}

export default Home;
