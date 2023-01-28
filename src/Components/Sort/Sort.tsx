import React, { useState } from "react";
import { TCountry } from "../../api";

type ISortProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
};

const Sort = ({ countries, setShowCountries }: ISortProps) => {
  const [sortDesc, setSortDesc] = useState(true);

  const sortHandler = () => {
    countries.sort((a, b) => {
      if (sortDesc) {
        if (a["name"] < b["name"]) {
          return 1;
        }
        return -1;
      }
      if (a["name"] > b["name"]) {
        return 1;
      }
      return -1;
    });
    setShowCountries([...countries]);
    setSortDesc(!sortDesc);
  };
  return (
    <button type="button" onClick={sortHandler}>
      Sort by name {sortDesc ? "DESC" : "ASC"}
    </button>
  );
};

export default Sort;
