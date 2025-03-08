import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { wixClientServer } from "@/lib/wixClientServer";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryID,
  limit,
}: {
  categoryID: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryID)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
  console.log(res.items[0]);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt="product image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1].image?.url || "/product.png"}
                alt="product second image"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              {product.priceData?.price} {product.priceData?.currency}
            </span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections?.find(
                    (resource) => resource.title === "SHORT DESC"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <Button variant="outline" size="lg" rounded="full">
            Add To Cart
          </Button>
        </Link>
      ))}
    </div>
  );
};
export default ProductList;
