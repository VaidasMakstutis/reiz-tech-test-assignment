import React, { useState } from "react";
import { TCountry } from "../../api";

type ISortProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
  sortRef: React.MutableRefObject<HTMLButtonElement | null>;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
};

const Sort = ({ countries, setShowCountries, sortRef, activeButton, setActiveButton }: ISortProps) => {
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
    setActiveButton(sortRef?.current?.id || "");
    setShowCountries([...countries]);
    setSortDesc(!sortDesc);
  };
  return (
    <button ref={sortRef} id="sort" type="button" onClick={sortHandler}>
      Sort by name {sortDesc ? "DESC" : "ASC"}
    </button>
  );
};

export default Sort;
