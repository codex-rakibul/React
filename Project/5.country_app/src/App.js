import "./index.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Countries from "./Components/Countries";
import Search from "./Components/Search";
const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCountries(json);
      setFilterCountries(json);
      setIsLoading(false);
      setError(null);
    } catch (error) {
        setIsLoading(false);
        setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (countryName) =>{
    const filterCountry = countries.filter(country => country.name.common !== countryName);
    setFilterCountries(filterCountry);
  };
  
  const handleSearch = (searchCountry) =>{
    let searchValue = searchCountry.toLowerCase();
    const newCountries = countries.filter((country) =>{
      const newCountryName = country.name.common.toLowerCase();
      return newCountryName.startsWith(searchValue)

    });
    setFilterCountries(newCountries);
  };

  return <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isloading && <h2>Loading....</h2>}
      {error && <h2>{error.message}</h2>}
      {
        countries && <Countries countries={filterCountries} onRemoveCountry={handleRemoveCountry}/>
      }
  </>;
}

export default App;
