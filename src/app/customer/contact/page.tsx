import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#f9fafb] min-h-screen py-24 px-6 md:px-12 text-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Have questions or need assistance? We’d love to hear from you.
        </p>

        <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-md px-8 py-10 space-y-6 transition-all duration-300">
          <div className="text-left">
            <p className="text-sm text-orange-500 uppercase mb-1 tracking-wide">
              Email
            </p>
            <p className="text-lg text-gray-800 font-medium">
              info@tandoorikababhut.ca
            </p>
          </div>
          <div className="text-left">
            <p className="text-sm text-orange-500 uppercase mb-1 tracking-wide">
              Phone
            </p>
            <p className="text-lg text-gray-800 font-medium">
              +1 (403) 460-9757
            </p>
          </div>
          <div className="text-left">
            <p className="text-sm text-orange-500 uppercase mb-1 tracking-wide">
              Address
            </p>
            <p className="text-lg text-gray-800 font-medium">
              4805 A 17 Avenue SE, Calgary, AB T2A 0V3, Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
