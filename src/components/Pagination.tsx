"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function createPageUrl(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between w-full">
      <Button
        size="lg"
        rounded="md"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Prev
      </Button>
      <Button
        size="lg"
        rounded="md"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
