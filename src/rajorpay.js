import React, { useEffect } from 'react';

const RazorpayComponent = () => {
    useEffect(() => {
        const loadRazorpay = async () => {
            // Load Razorpay script dynamically
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                // Initialize Razorpay when script is loaded
                const rzp = new window.Razorpay({
                    key: 'rzp_test_NEFkyKlmiaaw6s',
                    amount: 50000, // Example: 500 INR
                    currency: 'INR',
                    name: 'Your Company Name',
                    description: 'Product or service description',
                    prefill: {
                        email: 'customer@example.com',
                        contact: '9999999999',
                    },
                    handler: function (response) {
                        // Send payment success message to parent window
                        window.parent.postMessage('paymentSuccess', '*');
                    },
                });

                // Open Razorpay checkout when button is clicked
                document.getElementById('rzp-button').onclick = function () {
                    rzp.open();
                };
            };
        };

        loadRazorpay();

        // Cleanup function to remove script on component unmount
        return () => {
            document.body.removeChild(document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]'));
        };
    }, []);

    return (
        <div>
            <button id="rzp-button">Pay with Razorpay</button>
        </div>
    );
};

export default RazorpayComponent;
