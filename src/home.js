import React from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom';

function Home() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the value of 'value' from the URL parameters
    const value = searchParams.get('value');

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
                <div onClick={goBackToReactNative} class="button center">{value ? value : "PAY"}</div>
            </div>
        </div>
    )
}

export default Home