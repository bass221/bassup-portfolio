import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

export default function PayAndDownloadButton({ onSuccess }) {
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error("Stripe failed to initialize.");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/payment/create-checkout-session");

      if (res.data.url) {
        window.location.href = res.data.url; // ✅ Redirect to Stripe Checkout
      } else {
        console.error("Stripe session URL not returned from backend.");
      }
    } catch (err) {
      console.error("Payment error:", err.response?.data || err.message);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
    >
      💳 Pay $2 to Download
    </button>
  );
}
