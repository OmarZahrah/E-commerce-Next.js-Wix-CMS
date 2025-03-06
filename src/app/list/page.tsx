import Filter from "@/components/Filter";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="padding-section">
      {/* CAMPAIGN */}
      <div className=" hidden h-64 sm:flex justify-between p-4 bg-pink-50">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-brandPink text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="campaign image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You</h1>
    </div>
  );
};
export default ListPage;
