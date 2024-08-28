import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { IconButton, InputAdornment } from "@mui/material";
import { DashboardContext } from "../Context/DashboardContext";

export default function AddWidgetInput() {
  const [widgetName, setWidgetName] = useState("");
  const { addWidgetToCategory } = useContext(DashboardContext);
  const handleAddWidget = () => {
    if (widgetName.trim()) {
      addWidgetToCategory(widgetName);
      setWidgetName("");
    }
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Add New Widget"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        id="fullWidth"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleAddWidget}>
                <AddBoxRoundedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
