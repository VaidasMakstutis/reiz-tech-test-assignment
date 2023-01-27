import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { TCountry } from "../../api";

type IFilterProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
  areaRef: React.MutableRefObject<HTMLButtonElement | null>;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ countries, setShowCountries, areaRef, activeButton, setActiveButton }: IFilterProps) => {
  const [filterByRegion, setFilterByRegion] = useState("");

  const findCountriesSmallerThanLtu = () => {
    const areaOfLtu = 65300;
    setShowCountries(countries.filter(country => country.area < areaOfLtu));
    setActiveButton(areaRef?.current?.id || "");
  };

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setFilterByRegion(event.target.value);
    setShowCountries(() => countries.filter(country => country.region.includes(event.target.value)));
  };

  return (
    <div className="filter-options d-inline-flex">
      <button ref={areaRef} id="filter-area" onClick={findCountriesSmallerThanLtu}>
        Countries are smaller than Lithuania
      </button>
      <Form.Select aria-label="Default select example" className="mx-3" value={filterByRegion} onChange={handleChange}>
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
