import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { TCountry } from "../../api";

type IFilterProps = {
  countries: TCountry[];
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
};

const Filter = ({ countries, setShowCountries }: IFilterProps) => {
  const [filterByRegion, setFilterByRegion] = useState("");
  const [filterByArea, setFilterByArea] = useState(0);

  const handleChangeByArea: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setFilterByArea(parseInt(event.target.value));
    if (parseInt(event.target.value) === 0) {
      setShowCountries(countries);
    } else {
      setShowCountries(countries.filter(country => country.area < parseInt(event.target.value)));
    }
  };

  const handleChangeByRegion: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setFilterByRegion(event.target.value);
    setShowCountries(() => countries.filter(country => country.region.includes(event.target.value)));
  };

  return (
    <div className="filter-options d-flex">
      <div>
        <Form.Select aria-label="Default select example" value={filterByArea} onChange={handleChangeByArea}>
          <option value="0">Filter countries by area...</option>
          <option value="65300">Smaller than Lithuania</option>
          <option value="881912">Smaller than Pakistan</option>
          <option value="131990">Smaller than Greece</option>
        </Form.Select>
      </div>
      <div>
        <Form.Select aria-label="Default select example" value={filterByRegion} onChange={handleChangeByRegion}>
          <option value="">Filter countries by region...</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Filter;
