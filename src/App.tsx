import React, { useState, useEffect } from "react";
import axios from "axios";
import { TCountry } from "./api";
import { API_URL } from "./api/shared/constants";
import Countries from "./Components/Countries";

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
      <section className="countries-header">
        <h2>Countries list</h2>
      </section>
      <Countries countries={countries} loading={loading} />
    </div>
  );
};

export default App;
