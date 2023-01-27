import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { TCountry } from "../../api";

type IFilterProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
};

const Filter = ({ countries, setShowCountries }: IFilterProps) => {
  const [filterByRegion, setFilterByRegion] = useState("");

  const findCountriesSmallerThanLtu = () => {
    const areaOfLtu = 65300;
    setShowCountries(countries.filter(country => country.area < areaOfLtu));
  };

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setFilterByRegion(event.target.value);
    setShowCountries(() => countries.filter(country => country.region.includes(event.target.value)));
  };

  return (
    <div className="filter-options d-inline-flex">
      <button id="filter-area" className="mx-3" onClick={findCountriesSmallerThanLtu}>
        Countries are smaller than Lithuania
      </button>
      <Form.Select aria-label="Default select example" value={filterByRegion} onChange={handleChange}>
        <option value="">Filter countries by region...</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Form.Select>
    </div>
  );
};

export default Filter;
