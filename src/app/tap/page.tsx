"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tap() {
  const [amount, setAmount] = useState(99);
  const [currency, setCurrency] = useState("kwd");
  const [cardToken, setCardToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const paymentInfoStr = localStorage.getItem("paymentInfo");
    if (paymentInfoStr) {
      console.log("has payment info");
      const paymentInfo: { amount: number; currency: string } =
        JSON.parse(paymentInfoStr);
      setAmount(paymentInfo.amount);
      setCurrency(paymentInfo.currency);
      console.log(paymentInfo);
      return;
    }

    console.log("no payment info");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("tap-card-token");
    if (token) {
      setCardToken(token);
    }

    console.log("no token yet");
  }, []);

  const handleAddNewCard = () => {
    const paymentInfo = {
      amount,
      currency,
    };

    // cause we need these information after comming back to this page
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));

    router.push("http://localhost:3000/tap/add-new-card");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-24">Tap Demo</h1>
      <div>
        <div>Club name: Circular Spin Padel Club, Kuwait</div>
        <div>Amount: {amount}</div>
        <div>Currency: {currency}</div>
        <div>Token: {cardToken}</div>

        <button className="bg-white p-4 mt-6 w-full" onClick={handleAddNewCard}>
          Add new card
        </button>
      </div>
    </main>
  );
}
