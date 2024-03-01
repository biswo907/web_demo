import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();




    useEffect(() => {
        const loadRazorpay = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const company = urlParams.get('company');
            const user = urlParams.get('user');
            const amount = urlParams.get('amount');
            const email = urlParams.get('amount');
            const phone = urlParams.get('amount');


            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: amount ? amount : "30000",
                    currency: 'INR',
                    name: company ? company : "Clickezy",
                    // order_id: demoOrderId, // Include the order ID
                    description: 'Product or service description',
                    prefill: {
                        email: email ? email : "xyz@gmail.com",
                        contact: phone ? phone : "9090909090",
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

export default Layout;
