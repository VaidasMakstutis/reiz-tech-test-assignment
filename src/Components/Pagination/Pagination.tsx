import React from "react";

type IPaginationProps = {
  countriesPerPage: number;
  totalCountries: number;
  paginate: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ countriesPerPage, totalCountries, paginate }: IPaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="px-3">
      <ul className="pagination d-flex flex-wrap">
        {pageNumbers.map(number => (
          <li key={number} className="page-item mb-5">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
