import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
import { useEffect, useState } from "react";
import { paymentApi } from "../../api/productApi";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`);

export const Stripe = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // getSecret();
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log({ clientSecret });
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
