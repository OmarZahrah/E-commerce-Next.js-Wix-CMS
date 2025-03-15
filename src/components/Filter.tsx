"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  function handleFilterChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    let { name, value } = e.target;
    const params = new URLSearchParams(searchParams);

    params.set(name, value);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="number"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/*Filter Categories */}
        {searchParams.get("cat") === "all-products" && (
          <select
            name="cat"
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
            onChange={handleFilterChange}
          >
            {/* <option value="all-products">All</option>
          <option value="t-shirts">T-shirt</option>
          <option value="shirts">Shirts</option>
          <option value="jackets">Jackets</option>
          <option value="pants">Shorts & Pants</option> */}
            <option>Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        )}
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
