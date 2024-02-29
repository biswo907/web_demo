import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

function Home() {
    const location = useLocation(); // Use useLocation hook to get the current location

    useEffect(() => {
        const loadRazorpay = async () => {

            const urlParams = new URLSearchParams(window.location.search);
            const company = urlParams.get('company');
            const user = urlParams.get('user');
            const amount = urlParams.get('amount');

            // Load Razorpay script dynamically
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                // Initialize Razorpay when script is loaded
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: amount ? amount : 50000, // Example: 500 INR
                    currency: 'INR',
                    name: company ? company : 'Your Company Name',
                    description: 'Product or service description',
                    prefill: {
                        email: 'biswo@example.com',
                        contact: '9999999999',
                    },
                    handler: function (response) {
                        // Send payment success message to parent window
                        window.ReactNativeWebView.postMessage('paymentSuccess');
                    },
                });

                // Open Razorpay checkout immediately
                rzp.open();
            };
        };

        loadRazorpay();

        // Cleanup function to remove script on component unmount
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
