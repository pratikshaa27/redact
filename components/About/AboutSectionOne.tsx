"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "../Pricing/PricingBox";
import OfferList from "../Pricing/OfferList";


const AboutSectionOne = () => {
  const [gradientScale, setGradientScale] = useState("low");
  const [selectedRedactionType, setSelectedRedactionType] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const handleGradientChange = (event) => {
    const value = event.target.value;
    setGradientScale(value);
    setIsPanelVisible(value === "high"); // Show panel only when "High" is selected
  };

  const handleRedactionTypeChange = (event) => {
    setSelectedRedactionType(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please upload a file.");
      return;
    }

    alert(`
      Form submitted:
      Gradient Scale: ${gradientScale}
      Redaction Type: ${selectedRedactionType}
      File Name: ${selectedFile.name}
    `);

    // Add form submission logic here
  };

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Section */}
            <div className="w-full px-4 lg:w-1/2">
            <div>
            <h1 className="text-3xl"><b>RE-DACTION of your Sensitive Data</b></h1>  <br></br> 
            <h5>RE-DACT is your go-to tool for ensuring data privacy and security.</h5> 
            </div>
            <br></br>  <br></br>
              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <ul>
                  <li className="mb-5 text-lg font-medium text-body-color">
                    <strong>Low Scale (Black and Blurred):</strong>
                    <ul>
                      <li>Replaces sensitive content with black boxes.</li>
                      <li>Applies blur effects to hide sensitive text.</li>
                      <li>Provides quick and straightforward privacy measures.</li>
                    </ul>
                  </li>
                  <br />
                  <li className="mb-5 text-lg font-medium text-body-color">
                    <strong>High Scale (Synthetic Replacement):</strong>
                    <ul>
                      <li>Replaces sensitive information with synthetic data.</li>
                      <li>Uses contextually relevant placeholder text.</li>
                      <li>Maintains readability while securing data.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dropdown */}
                    <div className="mb-6">
                      <label
                        htmlFor="gradient-scale"
                        className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                      >
                        Select Gradient Scale:
                      </label>
                      <select
                        id="gradient-scale"
                        value={gradientScale}
                        onChange={handleGradientChange}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      >
                        <option value="low">Low</option>
                        <option value="high">High</option>
                      </select>
                    </div>

                    {/* Radio Buttons */}
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="blacked-out"
                          name="redaction-type"
                          value="Blacked Out"
                          checked={selectedRedactionType === "Blacked Out"}
                          onChange={handleRedactionTypeChange}
                          className="mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:checked:bg-primary"
                        />
                        <label
                          htmlFor="blacked-out"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Blacked Out
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="blurred-out"
                          name="redaction-type"
                          value="Blurred Out"
                          checked={selectedRedactionType === "Blurred Out"}
                          onChange={handleRedactionTypeChange}
                          className="mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:checked:bg-primary"
                        />
                        <label
                          htmlFor="blurred-out"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Blurred Out
                        </label>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="flex flex-col items-center">
                      <label
                        htmlFor="file-upload"
                        className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4"
                      >
                        Upload File:
                      </label>
                      <div className="flex items-center">
                        <label htmlFor="file-upload">
                          <img
                            src="/images/about/up.png"
                            alt="Upload Icon"
                            className="object-contain"
                            style={{
                              width: "70px",
                              height: "70px",
                            }}
                          />
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="group relative inline-flex items-center justify-center rounded-lg px-6 py-3 text-white shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800"
                        style={{
                          backgroundColor: "rgb(73 165 255 / var(--tw-bg-opacity))",
                        }}
                      >
                        <span className="relative text-sm font-medium">
                          Submit Form
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Panel */}
        {isPanelVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl dark:bg-gray-800 relative" style={{}}>
          {/* Close Button */}
          <button
            onClick={() => setIsPanelVisible(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            &times;
          </button>
      
          {/* Heading */}
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Subscription Plans
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Upgrade to unlock advanced features and enjoy enhanced capabilities.
          </p>
      
          {/* Pricing Boxes */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-15 md:grid-cols-1 lg:grid-cols-2">
            {/* Lite Plan */}
            <PricingBox
              packageName="Lite"
              price="120"
              duration="yr"
              subtitle="Perfect for individuals with limited requirements."
            >
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              
              
            </PricingBox>
      
            {/* Basic Plan */}
            <PricingBox
              packageName="Basic"
              price="789"
              duration="yr"
              subtitle="Great for small teams looking for more features."
            >
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              
              
            </PricingBox>
      
           
            
          </div>
        </div>
      </div>
      
        
        )}
      </div>
    </section>
  );
};

export default AboutSectionOne;