import React, { useState, useEffect } from "react";
import axios from "axios";
import { TCountry } from "./api";
import { API_URL } from "./api/shared/constants";
import Countries from "./Components/Countries";
import Sort from "./Components/Sort";
import Filter from "./Components/Filter";
import Pagination from "./Components/Pagination";

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [showCountries, setShowCountries] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      const data: TCountry[] = res.data;
      setCountries([...data]);
      setLoading(false);
    };
    getCountries();
  }, []);

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <section className="countries-header">
        <h2>Countries list</h2>
        <div className="sort-and-filter-wrapper d-flex justify-content-between px-4 py-4">
          <div>
            <Sort setShowCountries={setShowCountries} countries={countries} />
          </div>
          <div>
            <Filter setShowCountries={setShowCountries} countries={countries} />
          </div>
        </div>
      </section>
      <Countries countries={showCountries.length ? showCountries : currentCountries} loading={loading} />
      <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
    </div>
  );
};

export default App;
