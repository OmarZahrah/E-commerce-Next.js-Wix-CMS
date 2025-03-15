"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border rounded-md"
            ></textarea>
            <button className="bg-colorBrandPrimary text-white py-2 px-4 rounded-md w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FaPhone className="text-xl text-colorBrandPrimary" />
            <p className="text-lg">+1 (234) 567-890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-colorBrandPrimary" />
            <p className="text-lg">support@moda.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-colorBrandPrimary" />
            <p className="text-lg">123 Fashion Street, Cairo, Egypt</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-48"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110673.09871692593!2d31.20009215127855!3d30.044419599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458471d3cc9a3b3%3A0x19e0c8bb8e82cb3!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1615912450123!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
