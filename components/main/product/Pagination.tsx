import { usePagination } from "@hooks/usePagination";
import { useState } from "react";
import LeftArrow from "@assets/icons/arrow-left.svg";
import RightArrow from "@assets/icons/arrow-right.svg";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginationRange = usePagination({
    currentPage,
    pageSize: 16,
    totalCount: 1600,
    siblingCount: 2,
  });
  return (
    <ul className="pagination">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <span>
            <LeftArrow />
          </span>
          <span>Prev</span>
        </button>
      </li>
      {paginationRange.map((page, index) => (
        <li key={index}>
          <button
            className={currentPage === page ? "active" : ""}
            onClick={() =>
              page === "..."
                ? index === 1
                  ? setCurrentPage((paginationRange[index + 1] as number) - 1)
                  : setCurrentPage((paginationRange[index - 1] as number) + 1)
                : setCurrentPage(page as number)
            }
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          <span>Next</span>
          <span>
            <RightArrow />
          </span>
        </button>
      </li>
    </ul>
  );
}
