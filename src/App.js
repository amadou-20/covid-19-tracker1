import React, { useState, useEffect } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";


function App() {
  const [countries, setCountries] = useState([
    "USA", "UK", "JAPON", "MALI",]);

    useEffect(() => {
      const getCountriesData = async() => {
      await  fetch("https://disease.sh/v3/covid-19/countries")
         .then((reponse) => reponse.json())
         .then((data) => {
           const countries = data.map((country) => ({
           name: country.country, // united states, united kingdom
           value: country.countryInfo.iso2 // USA, UK, FR
           }));
  
        setCountries(countries);
         });
      }
      getCountriesData();
    }, []);


  return (
    <div className="app">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {
            countries.map((country) => (
              <MenuItem value={country.value} >{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>     
    </div>
  );
}

export default App;
