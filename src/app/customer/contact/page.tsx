import React, { useState } from "react";

const Contact = () => {
  return (
    <section className="contact-us text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Have questions or need assistance? Reach out to us!
      </p>

      <div className="mt-6">
        <p>
          <strong>Email:</strong> info@tandoorikababhut.ca
        </p>
        <p>
          <strong>Phone:</strong> +1 (403) 460-9757
        </p>
        <p>
          <strong>Address:</strong> 4805 A 17 Avenue Southeast, Calgary, AB T2A
          0V3, Canada
        </p>
      </div>
    </section>
  );
};

export default Contact;
