import Image from "next/image";
import about from "/public/about.jpg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-16 h-full">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-colorBrandPrimary">Moda</span>,
          where fashion meets quality. We believe that clothing is more than
          just fabric—it&apos;s a statement of style, confidence, and
          individuality.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 relative h-80">
          <Image
            src={about}
            alt="Our Story"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2025, our journey began with a simple mission: to provide
            stylish and high-quality fashion at affordable prices. We are
            passionate about curating collections that inspire confidence and
            self-expression.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every piece we offer is carefully designed to ensure comfort,
            durability, and trend-setting aesthetics.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are committed to redefining fashion by delivering sustainable,
          stylish, and ethically made clothing that empowers individuals and
          inspires creativity.
        </p>
      </div>

      {/* Values Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Quality</h3>
          <p className="text-gray-600 mt-2">
            We ensure that every product meets high-quality standards for
            comfort and durability.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Sustainability
          </h3>
          <p className="text-gray-600 mt-2">
            Our collections prioritize eco-friendly materials and responsible
            sourcing.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Style</h3>
          <p className="text-gray-600 mt-2">
            We stay ahead of trends, bringing you the latest in modern fashion.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center flex flex-col gap-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Join Our Community
        </h2>
        <p className="text-gray-600 mt-4">
          Be part of our fashion-forward journey. Follow us on social media and
          explore our latest collections!
        </p>
        <Link
          href="/list?cat=all-products"
          className="m-auto w-fit bg-colorBrandPrimary text-white px-6 py-3 rounded-full text-lg hover:opacity-80 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
