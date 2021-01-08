import "./App.css";
import { MenuItem, Select, FormControl } from "@material-ui/core";
function App() {
  return (
    <div className="app">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Option 1</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
