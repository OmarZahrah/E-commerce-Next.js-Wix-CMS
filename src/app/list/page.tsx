import Button from "@/components/Button";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = wixClientServer();
  const { collection } = await (
    await wixClient
  ).collections.getCollectionBySlug(searchParams.cat || "all-products");

  return (
    <div className="padding-section">
      {/* CAMPAIGN */}
      <div className=" hidden h-64 sm:flex justify-between p-4 bg-colorCampaign">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <Button rounded="md">Buy Now</Button>
        </div>
        <div className="relative w-1/3">
          <Image
            src={"/woman.png"}
            alt="campaign image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {collection?.name} For You
      </h1>
      <Suspense fallback={"loading..."}>
        <ProductList
          categoryID={collection?._id || "00000000-000000-000000-000000000001"}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};
export default ListPage;
