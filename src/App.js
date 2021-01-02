import React, { useState } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";


function App() {

  const [countries, setCountries] = useState([
    "USA", "UK", "JAPON", "MALI",
  ]);

  return (
    <div className="app">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {
            countries.map((country) => (
              <MenuItem value={country} >{country}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>     
    </div>
  );
}

export default App;
