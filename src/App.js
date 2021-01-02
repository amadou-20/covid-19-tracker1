import React from "react";
import './App.css';
import { MenuItem,FormControl,Select } from "@material-ui/core";


function App() {

  
  return (
    <div className="app">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide 2</MenuItem>
          <MenuItem value="worldwide">Worldwide3</MenuItem>
          <MenuItem value="worldwide">Worldwide 4</MenuItem>
        </Select>
      </FormControl>
      </div>     
    </div>
  );
}

export default App;
