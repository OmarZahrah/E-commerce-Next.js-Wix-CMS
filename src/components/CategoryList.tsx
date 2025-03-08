import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.collections.queryCollections().find();
  console.log(items[0]);
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hidden">
      <div className="flex gap-4 md:gap-8">
        {items.map((category) => (
          <Link
            key={category._id}
            href={`/list?cat=${category.slug}`}
            className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative  w-full h-96 bg-slate-100">
              <Image
                src={category.media?.mainMedia?.image?.url || "/category.png"}
                alt="category image"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
