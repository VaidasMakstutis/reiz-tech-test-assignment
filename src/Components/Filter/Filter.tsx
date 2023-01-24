import React from "react";
import { TCountry } from "../../api";

type IFilterProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
};

const Filter = ({ countries, setShowCountries }: IFilterProps) => {
  const findCountriesSmallerThanLtu = () => {
    const areaOfLtu = 65300;
    setShowCountries(countries.filter(country => country.area < areaOfLtu));
  };

  const findCountriesInOceania = () => {
    setShowCountries(countries.filter(country => country.region === "Oceania"));
  };

  return (
    <div className="filter-options">
      <label>Filter options:</label>
      <button id="filter-area" onClick={findCountriesSmallerThanLtu}>
        Countries are smaller than Lithuania
      </button>
      <button id="filter-region" onClick={findCountriesInOceania}>
        Countries are in Oceania
      </button>
    </div>
  );
};

export default Filter;
