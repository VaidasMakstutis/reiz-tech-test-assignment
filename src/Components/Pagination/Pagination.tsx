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
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item mb-5">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
