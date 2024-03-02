import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();




    useEffect(() => {
        const loadRazorpay = async () => {
            const urlParams = new URLSearchParams(window.location.search);

            const company = urlParams.get('company');
            const rajorpay = urlParams.get('rajorpay');
            const userDetails = urlParams.get('userDetails');



            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: rajorpay?.amount ? rajorpay?.amount : 120000,
                    currency: 'INR',
                    name: company ? company : "Clickezy",
                    order_id: rajorpay?.id, // Include the order ID
                    description: 'Product or service description',
                    prefill: {
                        email: userDetails?.email ? userDetails?.eamil : "gaurav.kumar@example.com",
                        contact: userDetails?.phone ? userDetails?.phone : "9999999998",
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
