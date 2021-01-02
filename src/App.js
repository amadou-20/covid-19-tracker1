import React, { useState, useEffect } from "react";
import './App.css';
import InfoBox from "./InfoBox";
import { MenuItem, FormControl, Select } from "@material-ui/core";


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");


    useEffect(() => {
      const getCountriesData = async () => {
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


 const onCountryChange = async (event) => {
   const countryCode = event.target.value;

    console.log('YOOO >>>>>', countryCode);
    setCountry(countryCode);
 };

  return (
    <div className="app">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" 
              onChange={onCountryChange} 
              value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                  <MenuItem value={country.value} >{country.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
      </div> 
        <div className="app_stats">
          <InfoBox title="Coronavirus Cases" cases={300} total={400} />

          <InfoBox title="Recovered" cases={200} total={100} />

          <InfoBox title="Deaths" cases={100} total={200} />
        </div>

    </div>
  );
}

export default App;
