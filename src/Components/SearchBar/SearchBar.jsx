import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../../Data.json";

const widgetOptions = data.categories.flatMap((category) =>
  category.widgets.map((widget) => ({ label: widget.name }))
);

export default function SearchBar() {
  return (
    <Autocomplete
      className="w-6/12"
      disablePortal
      id="combo-box-demo"
      options={widgetOptions}
      renderInput={(params) => <TextField {...params} label="Search Widgets" />}
    />
  );
}
