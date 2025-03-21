import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { wixClientServer } from "@/lib/wixClientServer";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = parseInt(process.env.PRODUCT_PER_PAGE!) || 10;

const ProductList = async ({
  categoryID,
  limit,
  searchParams,
}: {
  categoryID: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryID)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }
  const res = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
      {res.items.map((product) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
        >
          <div className="relative  w-full min-h-96">
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
          </div>
          <span className="font-semibold">
            {product.priceData?.price} {product.priceData?.currency}
          </span>
          {product.additionalInfoSections && (
            <div className="text-sm text-gray-500">
              {product?.description?.substring(3, 35)}...
            </div>
          )}
          <Button
            variant="outline"
            size="lg"
            rounded="full"
            className="mt-auto"
          >
            Add To Cart
          </Button>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};
export default ProductList;
