// // import { Footer } from './components/footer/Footer';
// import { Navigation } from './routes/Navigation';

// function App() {
//   return (
//     <div>
//       <Navigation />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
import "./App.css";
import CheckoutForm from "./components/stripe/CheckoutForm";
import { paymentApi } from "./api/productApi";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51MZysYCTwDOIsdwTmokS6bmcGNagzFN1uFUnxEuKja4S8zAbnIzP0wUTNPvmCYMJgDdCg0eskFd2z3b4DpTyIHb600lvg4WJ4n"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  const getSecret = async () => {
    try {
      const resp = await paymentApi.post(
        "/create-payment-intent",
        JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log({ resp });
      setClientSecret(resp.data);
    } catch (error) {}
  };
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

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
