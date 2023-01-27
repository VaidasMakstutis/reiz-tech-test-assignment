import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TCountry } from "./api";
import { API_URL } from "./api/shared/constants";
import Countries from "./Components/Countries";
import Sort from "./Components/Sort";
import Filter from "./Components/Filter";
import Pagination from "./Components/Pagination";

const countriesPerPage = 10;

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<TCountry[]>([]);
  const [activeButton, setActiveButton] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const sortRef = useRef<HTMLButtonElement | null>(null);
  const areaRef = useRef<HTMLButtonElement | null>(null);

  const fetchCountries = async () => {
    setLoading(true);
    const res = await axios.get(API_URL);
    const data: TCountry[] = res.data;
    setCountries(data);
    setFilteredCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCountries]);

  useEffect(() => {
    if (sortRef.current) {
      sortRef.current.className = sortRef.current.id === activeButton ? "active" : "";
    }
    if (areaRef.current) {
      areaRef.current.className = areaRef.current.id === activeButton ? "active" : "";
    }
  }, [activeButton]);

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <section className="countries-header">
        <h2>Countries list</h2>
        <div className="sort-and-filter-wrapper d-flex justify-content-between align-items-center py-4">
          <div>
            <Sort
              sortRef={sortRef}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              setShowCountries={setFilteredCountries}
              countries={countries}
            />
          </div>
          <div>
            <Filter
              areaRef={areaRef}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              setShowCountries={setFilteredCountries}
              countries={countries}
            />
          </div>
        </div>
      </section>
      <Countries countries={currentCountries} loading={loading} />
      <Pagination countriesPerPage={countriesPerPage} totalCountries={filteredCountries.length} paginate={paginate} />
    </div>
  );
};

export default App;
