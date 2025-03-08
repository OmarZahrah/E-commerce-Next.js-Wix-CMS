import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!items[0]) return notFound();

  const product = items[0];
  console.log(product);

  return (
    <div className="padding-section flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages images={product.media?.items} />
      </div>
      {/* CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <hr className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">
            {product.priceData?.discountedPrice} {product.priceData?.currency}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.priceData?.price} {product.priceData?.currency}
            </h3>
            <h2 className="font-medium text-2xl">
              {product.priceData?.discountedPrice} {product.priceData?.currency}
            </h2>
          </div>
        )}
        <hr className="h-[2px] bg-gray-100" />
        <CustomizeProducts
          productID={product._id}
          variants={product.variants}
          productOptions={product.productOptions}
        />
        <Add />
        <hr className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section, index) => (
          <div className="text-sm" key={index}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SinglePage;
