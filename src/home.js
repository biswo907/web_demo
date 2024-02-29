import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    useEffect(() => {
        const loadRazorpay = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const company = urlParams.get('company');
            const user = urlParams.get('user');
            const amount = urlParams.get('amount');

            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: amount ? amount : 50000,
                    currency: 'INR',
                    name: company ? company : 'Your Company Name',
                    description: 'Product or service description',
                    prefill: {
                        email: 'biswo@example.com',
                        contact: '9999999999',
                    },
                    handler: function (response) {
                        window.ReactNativeWebView.postMessage('paymentSuccess');

                        // if (response.razorpay_payment_id) {
                        //     window.ReactNativeWebView.postMessage('paymentSuccess');
                        // } else {
                        //     window.ReactNativeWebView.postMessage('paymentFailed');
                        // }
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
