"use client";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

const ProductImages = ({ images }: { images: any }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="flex flex-col gap-8">
      <div className="h-[500px] relative">
        <Image
          src={images[currentImage].image.url}
          alt="product image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 ">
        {images.map((image: any, index: number) => (
          <div
            className="relative w-1/4 h-32 gap-5 mt-8 cursor-pointer"
            key={image._id}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image.image.url}
              alt="product image"
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
