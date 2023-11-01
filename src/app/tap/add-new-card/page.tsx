"use client";

import Script from "next/script";

export default function AddNewCard() {
  return (
    <>
      <form id="form-container">
        {/* Tap element will be here */}
        <div id="element-container" />
        <div id="error-handler" role="alert" />
        <div
          id="success"
          style={{ display: "none", position: "relative", float: "left" }}
        >
          Success! Your token is <span id="token" />
        </div>
        {/* Tap pay button */}
        <button id="tap-btn">Submit</button>
      </form>

      <Script src="/tap.js"></Script>
    </>
  );
}
