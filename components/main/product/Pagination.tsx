import { usePagination } from "@hooks/usePagination";
import { useState } from "react";
import LeftArrow from "@assets/icons/arrow-left.svg";
import RightArrow from "@assets/icons/arrow-right.svg";

interface Props {
  count: number;
  onChange?: (page: number) => void;
}

// Component for pagination buttons.
export default function Pagination({ count, onChange }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginationRange = usePagination({
    currentPage,
    pageSize: 16,
    totalCount: count,
    siblingCount: 2,
  });

  function setPage(num) {
    setCurrentPage(num);
    if (onChange) {
      onChange(num);
    }
  }

  return (
    <ul className="pagination">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => setPage(currentPage - 1)}
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
              page === "..." // If page is "...", then it is a separator.
                ? index === 1
                  ? setPage((paginationRange[index + 1] as number) - 1) // If it is the first separator in range, then go to the previous page.
                  : setPage((paginationRange[index - 1] as number) + 1) // Else, go to the next page.
                : setPage(page as number)
            }
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button onClick={() => setPage(currentPage + 1)}>
          <span>Next</span>
          <span>
            <RightArrow />
          </span>
        </button>
      </li>
    </ul>
  );
}
