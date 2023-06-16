import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => handleClick(number)}
              className={
                currentPage === number ? "page-link active" : "page-link"
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
