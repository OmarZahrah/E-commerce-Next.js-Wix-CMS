import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl-px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList
            categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl-px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={"Loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl-px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList
          categoryID={process.env.NEW_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </div>
  );
};

export default HomePage;
