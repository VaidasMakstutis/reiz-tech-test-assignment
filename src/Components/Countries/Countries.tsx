import React from "react";
import { TCountry } from "../../api";
import Loader from "../Loader";

type ILoadingProps = {
  countries: TCountry[];
  loading: boolean;
};

const Countries = ({ countries, loading }: ILoadingProps) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ul className="countries">
        {countries &&
          countries.map((country, i) => {
            return (
              <li className="countries-list" key={i}>
                <div className="countries-list-item">
                  <div>
                    <span>Name: </span>
                    {country.name}
                  </div>
                  <div>
                    <span>Region: </span>
                    {country.region}
                  </div>
                  <div>
                    <span>Area: </span>
                    {country.area}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Countries;
