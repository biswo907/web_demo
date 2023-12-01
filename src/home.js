import React, { useEffect, useState } from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom';
import storeConfig from './www/http';

function Home() {
    const [addToCart, setAddToCart] = useState()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the value of 'value' from the URL parameters
    const value = searchParams.get('value');
    const attribute_data = searchParams.get('attribute_data');
    const price = searchParams.get('price');
    const product_id = searchParams.get('product_id');
    const total_quantity = searchParams.get('total_quantity');
    const user_id = searchParams.get('user_id');
    const variation_id = searchParams.get('variation_id');
    const token = searchParams.get('token');



    //   {"attribute_data": "Colors:Red,Sizes:12*15", "price": 649, "product_id": 22661, "total_quantity": 1, "user_id": 6439, "variation_id": 22681}

    // const separatedValues = attribute_data & attribute_data?.split(',')

    // const postdata =
    // {
    //     "attribute_data": separatedValues ? separatedValues[0] : `Colors:Red`,
    //     "Sizes": separatedValues ? separatedValues[1].split(':')[1] : `12*15`,
    //     "price": price ? price : 649,
    //     "product_id": product_id ? product_id : 22661,
    //     "total_quantity": total_quantity ? total_quantity : 1,
    //     "user_id": user_id ? user_id : 6439,
    //     "variation_id": variation_id ? variation_id : 22681
    // }

    // const handleCart = async () => {
    //     try {
    //         console.log("Add To Cart Called");
    //         const { data } = await storeConfig.post(`/store/add/to/cart`, postdata, {
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         })
    //         console.log("Add To Cart Success", data);
    //         setAddToCart(data)

    //     } catch (error) {
    //         console.log("Error", error);
    //         console.log("Error", error?.response?.data?.message);
    //     }
    // }

    // useEffect(() => {
    //     if (addToCart?.status === "success") {
    //         if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
    //             window.ReactNativeWebView.postMessage('goBack');
    //             setAddToCart("")
    //         }
    //     }
    // }, [addToCart])

    function goBackToReactNative() {
        // Send a message back to React Native
        // if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        // window.ReactNativeWebView.postMessage('goBack');
        // }
    }

    function handleSendMessage() {
        const dataToSend = {
            "message": 'Hello from React!',
            "value": 42,
            "attribute_data": attribute_data ? attribute_data : "attribute_data"

        };

        if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
            window.ReactNativeWebView.postMessage(JSON.stringify(dataToSend));
        }
    }

    return (
        <div class="card-wrapper">
            <div class="card">
                <div class="product-imgs">
                    <div class="img-display">
                        <div class="img-showcase">
                            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                        </div>
                    </div>
                    <div class="img-select">
                        <div class="img-item">
                            <a href="#" data-id="1">
                                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="2">
                                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="3">
                                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="4">
                                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h2 class="product-title">nike shoes</h2>
                    <a href="#" class="product-link">visit nike store</a>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>4.7(21)</span>
                    </div>

                    <div class="product-price">
                        <p class="last-price">Old Price: <span>$257.00</span></p>
                        <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
                    </div>

                    <div class="product-detail">
                        <h2>about this item: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                            <li>Color: <span>Black</span></li>
                            <li>Available: <span>in stock</span></li>
                            <li>Category: <span>Shoes</span></li>
                            <li>Shipping Area: <span>All over the world</span></li>
                            <li>Shipping Fee: <span>Free</span></li>
                        </ul>
                    </div>

                    <div class="purchase-info">
                        <input type="number" min="0" value="1" />
                        <button type="button" class="btn" onClick={handleSendMessage}>
                            Add to Cart <i class="fas fa-shopping-cart"></i>
                        </button>
                        <button type="button" class="btn">Compare</button>
                    </div>

                    <div class="social-links">
                        <p>Share At: </p>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home