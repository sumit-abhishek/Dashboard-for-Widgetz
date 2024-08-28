import { useContext, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { DashboardContext } from "../../Context/DashboardContext";
import AddWidgetInput from "../AddWidgetInput";

export default function WidgetList() {
  const { selectedCategory, removeWidgetFromCategory } =
    useContext(DashboardContext);

  const [checkedWidgets, setCheckedWidgets] = useState({});

  // Handle checkbox change for each widget
  const handleCheckboxChange = (widgetId) => (event) => {
    setCheckedWidgets((prevChecked) => {
      const updatedChecked = {
        ...prevChecked,
        [widgetId]: event.target.checked,
      };

      // Remove widget if unchecked
      if (!event.target.checked) {
        removeWidgetFromCategory(widgetId);
      }

      return updatedChecked;
    });
  };

  if (!selectedCategory || selectedCategory.length === 0) {
    return <p>Please select a category to view and add a widget</p>;
  }

  return (
    <div>
      <AddWidgetInput />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {selectedCategory.map((item) => (
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeWidgetFromCategory(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={checkedWidgets}
              onChange={handleCheckboxChange}
            />
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
