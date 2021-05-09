import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";
import "./styles/Payment.scss";
import AppContext from "../context/AppContext";
const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      "Abc7ZYV2I4lZulmNy5YRGKOT0NDTTZe_6F0jWa7NMs31K600mfm493wtidQm7qfoKIEO1VtPSdDW9lqx",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer: buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
    }
    history.push("/checkout/success");
  };

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => {
          return (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          );
        })}
        <button className="Payment-button" type="button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </button>
      </div>
      <aside />
    </section>
  );
};

export default Payment;
