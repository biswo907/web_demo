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


    const postdata =
    {
        "attribute_data": `Colors:Red`,
        "Sizes": `12*15`,
        "price": 649,
        "product_id": 22661,
        "total_quantity": 1,
        "user_id": 6439,
        "variation_id": 22681
    }

    const handleCart = async () => {
        try {
            console.log("Add To Cart Called");
            const { data } = await storeConfig.post(`/store/add/to/cart`, postdata, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log("Add To Cart Success", data);
            setAddToCart(data)

        } catch (error) {
            console.log("Error", error);
            console.log("Error", error?.response?.data?.message);
        }
    }

    useEffect(() => {
        if (addToCart?.status === "success") {

            const messagePayload = {
                "action": 'goBack',
                "additionalData": 'someValue',
                "userName": "Biswo",
                "id": 17
            };

            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify(messagePayload));
            }
        }
    }, [addToCart])

    function goBackToReactNative() {
        // Send a message back to React Native
        if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
            window.ReactNativeWebView.postMessage('goBack');
        }
    }

    return (
        <div class="mainContainer">
            <div class="cardHolder">
                <div class="header">
                    <div class="heading center">CHECKOUT</div>
                    <div class="stepHeading center">Payment Method</div>
                    <div class="card">
                        <div class="top part">
                            <img src="https://i.imgrpost.com/imgr/2017/12/26/visa-1.png" alt="visa-1.png" border="0" />
                        </div>
                        <div class="middle part">
                            <div class="infoheader vcenter">CARD NUMBER</div>
                            <div class="infocontent number vcenter">
                                <div class="num center">****</div>
                                <div class="num center">****</div>
                                <div class="num center">4658</div>
                                <div class="num center">****</div>
                            </div>
                        </div>
                        <div class="bottom part">
                            <div class="holderInfo">
                                <div class="infoheader vcenter">CARD HOLDER</div>
                                <div class="infocontent name vcenter">JOHN DOE</div>
                            </div>
                            <div class="expDate">
                                <div class="infoheader vcenter">EXP. DATE</div>
                                <div class="infocontent date vcenter">09/2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="status vcenter"> <i class="fa fa-check" aria-hidden="true"></i>
                Option : Credit/Debit Card
            </div>
            <h5 class="center">OTHER PAYMENT OPTIONS</h5>
            <h5 class="center">{attribute_data ? attribute_data : "attribute_data"}</h5>
            <h5 class="center">{price ? price : "price"}</h5>
            <h5 class="center">{product_id ? product_id : "product_id"}</h5>
            <h5 class="center">{total_quantity ? total_quantity : "total_quantity"}</h5>
            <h5 class="center">{user_id ? user_id : "user_id"}</h5>
            <h5 class="center">{variation_id ? variation_id : "variation_id"}</h5>
            <p>{token ? token : "token"}</p>


            <div class="options vcenter">
                <div class="opt">
                    <div class="icon center">
                        <i class="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <div class="optname center">COD</div>
                </div>
                <div class="opt">
                    <div class="icon center">
                        <i class="fa fa-btc" aria-hidden="true"></i>
                    </div>
                    <div class="optname center">BitCoin</div>
                </div>
                <div class="opt">
                    <div class="icon center">
                        <i class="fa fa-google-wallet" aria-hidden="true"></i>
                    </div>
                    <div class="optname center">E-Wallet</div>
                </div>
            </div>
            <div class="payment vcenter">
                <div class="amount">
                    <div class="infoheader vcenter">Total Amount</div>
                    <div class="infocontent val vcenter">$ 1,960</div>
                </div>
                <div onClick={handleCart} class="button center">{value ? value : "PAY"}</div>
            </div>
        </div>
    )
}

export default Home