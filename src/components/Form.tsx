"use client";

import { useState } from "react";
import JsonDisplay from "./JsonDisplay";
import { error } from "console";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // * first step
    name: "",
    type: "",
    legalName: "",
    isLicensed: "",
    licenseType: "",
    licenseNumber: "",
    isNonProfit: "",
    country: "",
    taxNumber: "",
    // commercial reg
    commercialRegistrationFile: null,
    commercialRegistrationFileId: "",
    commercialRegistrationNumber: "",
    commercialRegistrationIssuingCountry: "",
    commercialRegistrationIssuingDate: "",
    commercialRegistrationExpiryDate: "",

    // commercial license
    commercialLicenseFile: null,
    commercialLicenseFileId: "",
    commercialLicenseNumber: "",
    commercialLicenseIssuingCountry: "",
    commercialLicenseIssuingDate: "",
    commercialLicenseExpiryDate: "",

    // trademark
    trademarkDocumentFile: null,
    trademarkDocumentFileId: "",
    trademarkDocumentNumber: "",
    trademarkDocumentIssuingCountry: "",
    trademarkDocumentIssuingDate: "",
    trademarkDocumentExpiryDate: "",

    // * second step
    iban: "",
    swiftCode: "",
    accountNumber: "",
    recipientName: "",
    addressLine1: "",
    addressLine2: "",
    poBox: "",
    district: "",
    city: "",
    state: "",
    zipCode: "",
    countryBilling: "",

    // * third step
    cpTitle: "",
    cpFirstName: "",
    cpMiddleName: "",
    cpLastName: "",
    cpEmail: "",
    cpCountryCode: "",
    cpPhone: "",
    cpNationality: "",
    cpDOB: "",
    cpIDIssuingCountry: "",
    cpIDIssuingDate: "",
    cpIDExpiryDate: "",
    cpIDFrontFile: null,
    cpIDBackFile: null,
    cpPassportIssuingCountry: "",
    cpPassportIssuingDate: "",
    cpPassportExpiryDate: "",
    cpPassportFrontFile: null,
    cpPassportBackFile: null,

    // * fourth step
    brandName: "",
    brandAbout: "",
    brandWebsite: "",
    brandFacebook: "",
    brandInstagram: "",
    brandLinkedin: "",
    brandTwitter: "",
    brandLogo: null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      // If it's a file input, update the state with the file object
      setFormData({
        ...formData,
        [name]: files[0], // Assuming that only want to handle one file per input
      });
    } else {
      // For other input types, update the state normally
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:3001/tap-payment/create-business-account",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something wrong!!!");
      }

      const data = await response.json();
      console.log("🚀🚀🚀 ~~~ Success:", data);
    } catch (error) {
      console.error("🔥🔥🔥 ~~~ Error:", error);
    }
  };

  return (
    <div className="w-full max-w-[50%] mx-auto">
      {currentStep === 1 && (
        <form className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mb-4">Step 1: Customer Information</h2>

          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Type:
            <div className="mt-1">
              <label className="inline-block mr-4">
                <input
                  type="radio"
                  name="type"
                  value="corp"
                  checked={formData.type === "corp"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Corporation
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  name="type"
                  value="ind"
                  checked={formData.type === "ind"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Individual
              </label>
            </div>
          </label>

          <label className="block mb-2">
            Legal Name:
            <input
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Is Licensed:
            <div className="mt-1">
              <label className="inline-block mr-4">
                <input
                  type="radio"
                  name="isLicensed"
                  value="yes"
                  checked={formData.isLicensed === "yes"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Yes
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  name="isLicensed"
                  value="no"
                  checked={formData.isLicensed === "no"}
                  onChange={handleChange}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </label>

          {formData.isLicensed === "yes" && (
            <div>
              <label className="block mb-2">
                License Type:
                <input
                  type="text"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                />
              </label>
              <label className="block mb-2">
                License Number:
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                />
              </label>
            </div>
          )}

          <label className="block mb-2">
            Is Non-Profit:
            <div className="mt-1">
              <label className="inline-block mr-4">
                <input
                  type="radio"
                  name="isNonProfit"
                  value="yes"
                  checked={formData.isNonProfit === "yes"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Yes
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  name="isNonProfit"
                  value="no"
                  checked={formData.isNonProfit === "no"}
                  onChange={handleChange}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </label>

          <label className="block mb-2">
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-4">
            Tax Number:
            <input
              type="text"
              name="taxNumber"
              value={formData.taxNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          {/* File Input for Commercial Registration */}
          <div className="mb-8">
            <label className="block mb-2">
              Commercial Registration:
              <input
                type="file"
                name="commercialRegistrationFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>
            <div className="flex">
              <input
                type="text"
                name="commercialRegistrationNumber"
                value={formData.commercialRegistrationNumber}
                onChange={handleChange}
                placeholder="Number"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="text"
                name="commercialRegistrationIssuingCountry"
                value={formData.commercialRegistrationIssuingCountry}
                onChange={handleChange}
                placeholder="Issuing Country"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex">
              <input
                type="date"
                name="commercialRegistrationIssuingDate"
                value={formData.commercialRegistrationIssuingDate}
                onChange={handleChange}
                placeholder="Issuing Date"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="date"
                name="commercialRegistrationExpiryDate"
                value={formData.commercialRegistrationExpiryDate}
                onChange={handleChange}
                placeholder="Expiry Date"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* File Input for Commercial License */}
          <div className="mb-8">
            <label className="block mb-2">
              Commercial License:
              <input
                type="file"
                name="commercialLicenseFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>
            <div className="flex">
              <input
                type="text"
                name="commercialLicenseNumber"
                value={formData.commercialLicenseNumber}
                onChange={handleChange}
                placeholder="Number"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="text"
                name="commercialLicenseIssuingCountry"
                value={formData.commercialLicenseIssuingCountry}
                onChange={handleChange}
                placeholder="Issuing Country"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex">
              <input
                type="date"
                name="commercialLicenseIssuingDate"
                value={formData.commercialLicenseIssuingDate}
                onChange={handleChange}
                placeholder="Issuing Date"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="date"
                name="commercialLicenseExpiryDate"
                value={formData.commercialLicenseExpiryDate}
                onChange={handleChange}
                placeholder="Expiry Date"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* File Input for Trademark Document */}
          <div className="mb-2">
            <label className="block mb-2">
              Trademark Document:
              <input
                type="file"
                name="trademarkDocumentFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>
            <div className="flex">
              <input
                type="text"
                name="trademarkDocumentNumber"
                value={formData.trademarkDocumentNumber}
                onChange={handleChange}
                placeholder="Number"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="text"
                name="trademarkDocumentIssuingCountry"
                value={formData.trademarkDocumentIssuingCountry}
                onChange={handleChange}
                placeholder="Issuing Country"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex">
              <input
                type="date"
                name="trademarkDocumentIssuingDate"
                value={formData.trademarkDocumentIssuingDate}
                onChange={handleChange}
                placeholder="Issuing Date"
                className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="date"
                name="trademarkDocumentExpiryDate"
                value={formData.trademarkDocumentExpiryDate}
                onChange={handleChange}
                placeholder="Expiry Date"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </form>
      )}

      {/* ======================== step 2 - Bank information ======================== */}
      {currentStep === 2 && (
        <form className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mb-4">Step 2: Bank Information</h2>

          {/* Bank Information Fields */}
          <label className="block mb-2">
            IBAN:
            <input
              type="text"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Swift Code:
            <input
              type="text"
              name="swiftCode"
              value={formData.swiftCode}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Account Number:
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          {/* Billing Address Fields */}
          <h3 className="text-xl mt-4 mb-2">Billing Address</h3>

          <label className="block mb-2">
            Recipient Name:
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Address Line 1:
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Address Line 2:
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            PO Box:
            <input
              type="text"
              name="poBox"
              value={formData.poBox}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            District:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Country:
            <input
              type="text"
              name="countryBilling"
              value={formData.countryBilling}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 mr-4"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </form>
      )}

      {/* ========================= step 3 - Contact person =========================== */}
      {currentStep === 3 && (
        <form className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mb-4">Step 3: Contact Person</h2>

          {/* Title */}
          <div className="mb-2">
            <label className="block">Title:</label>
            <div>
              <label className="inline-block mr-4">
                <input
                  type="radio"
                  name="cpTitle"
                  value="Mr"
                  checked={formData.cpTitle === "Mr"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Mr
              </label>
              <label className="inline-block">
                <input
                  type="radio"
                  name="cpTitle"
                  value="Mrs"
                  checked={formData.cpTitle === "Mrs"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Mrs
              </label>
            </div>
          </div>

          <label className="block mb-2">
            First Name:
            <input
              type="text"
              name="cpFirstName"
              value={formData.cpFirstName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Middle Name:
            <input
              type="text"
              name="cpMiddleName"
              value={formData.cpMiddleName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Last Name:
            <input
              type="text"
              name="cpLastName"
              value={formData.cpLastName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="cpEmail"
              value={formData.cpEmail}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          {/* Phone */}
          <div className="mb-2">
            <label className="block">Phone:</label>
            <div className="flex">
              <input
                type="text"
                name="cpCountryCode"
                value={formData.cpCountryCode}
                onChange={handleChange}
                placeholder="Country Code"
                className="mt-1 p-2 w-1/3 rounded-md border border-gray-300"
              />
              <input
                type="text"
                name="cpPhone"
                value={formData.cpPhone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="mt-1 p-2 flex-1 ml-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          <label className="block mb-2">
            Nationality:
            <input
              type="text"
              name="cpNationality"
              value={formData.cpNationality}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Date of Birth:
            <input
              type="date"
              name="cpDOB"
              value={formData.cpDOB}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          {/* Identity Card */}
          <div className="mb-4">
            <h3 className="text-xl mb-2">Identity Card</h3>
            <label className="block mb-2">
              Issuing Country:
              <input
                type="text"
                name="cpIDIssuingCountry"
                value={formData.cpIDIssuingCountry}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <label className="block mb-2">
              Issuing Date:
              <input
                type="date"
                name="cpIDIssuingDate"
                value={formData.cpIDIssuingDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <label className="block mb-2">
              Expiry Date:
              <input
                type="date"
                name="cpIDExpiryDate"
                value={formData.cpIDExpiryDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <div className="mb-2">
              <label className="block">Front File:</label>
              <input
                type="file"
                name="cpIDFrontFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>

            <div className="mb-2">
              <label className="block">Back File:</label>
              <input
                type="file"
                name="cpIDBackFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* Passport */}
          <div>
            <h3 className="text-xl mb-2">Passport</h3>
            <label className="block mb-2">
              Issuing Country:
              <input
                type="text"
                name="cpPassportIssuingCountry"
                value={formData.cpPassportIssuingCountry}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <label className="block mb-2">
              Issuing Date:
              <input
                type="date"
                name="cpPassportIssuingDate"
                value={formData.cpPassportIssuingDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <label className="block mb-2">
              Expiry Date:
              <input
                type="date"
                name="cpPassportExpiryDate"
                value={formData.cpPassportExpiryDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </label>

            <div className="mb-2">
              <label className="block">Front File:</label>
              <input
                type="file"
                name="cpPassportFrontFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>

            <div className="mb-2">
              <label className="block">Back File:</label>
              <input
                type="file"
                name="cpPassportBackFile"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 mr-4"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </form>
      )}

      {/* ========================= step 4 - Brand Information =========================== */}
      {currentStep === 4 && (
        <form className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mb-4">Step 4: Brand Information</h2>

          <label className="block mb-2">
            Name
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            About
            <input
              type="text"
              name="brandAbout"
              value={formData.brandAbout}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Website
            <input
              type="text"
              name="brandWebsite"
              value={formData.brandWebsite}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Facebook
            <input
              type="text"
              name="brandFacebook"
              value={formData.brandFacebook}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Instagram
            <input
              type="text"
              name="brandInstagram"
              value={formData.brandInstagram}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            LinkedIn
            <input
              type="text"
              name="brandLinkedIn"
              value={formData.brandLinkedin}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          <label className="block mb-2">
            Twitter
            <input
              type="text"
              name="brandTwitter"
              value={formData.brandTwitter}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            />
          </label>

          {/* Brand Logo */}
          <div className="mb-4">
            <div className="mb-2">
              <label className="block">Brand Logo:</label>
              <input
                type="file"
                name="brandLogo"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 mr-4"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </form>
      )}

      {/* ============================== Last step - Review ==================================  */}
      {currentStep === 5 && (
        <form className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mb-4">Review and Submit</h2>

          <JsonDisplay jsonData={formData} />

          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 mr-4"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
