import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import { useLocation } from "react-router";
import axios from 'axios';

const Gpay =({updateUser}) => {
  const location = useLocation();
  let coins = location.state.prop.coins
  let price = location.state.prop.price
  let myuser = JSON.parse(localStorage.getItem("MyUser"))
  

  

console.log(myuser)
  return (
    <div >
      <h1> Google Pay React Demo</h1>
      <hr />
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: String(price),
            currencyCode: 'INR',
            countryCode: 'IN',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
          console.log('Successful payment for No. of coins: '+coins+" for Rs. "+price)
          myuser.dcoins = String(parseInt(myuser.dcoins)+coins)
          console.log(myuser)
          updateUser(myuser)
          
          
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
           
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='white'
        buttonType='Buy'
      />
    </div>
    
  );
}

export default Gpay;