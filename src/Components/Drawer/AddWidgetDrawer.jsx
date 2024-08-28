import { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AddWidgetButton from "../AddWidgetButton";
import AddIcon from "@mui/icons-material/Add";
import { DashboardContext } from "../../Context/DashboardContext";
import WidgetList from "../Widget List/WidgetList";

export default function AddWidgetDrawer() {
  const { categories, open, toggleDrawer, setSelectedCategory } =
    useContext(DashboardContext);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const DrawerList = (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      className="flex flex-col h-full"
    >
      <List className="flex shadow-lg">
        {categories.map((item) => (
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleCategoryClick(item.widgets)}>
              <ListItemText primary={item.name.split(" ")[0]} />
            </ListItemButton>
            <Divider orientation="vertical" variant="middle" flexItem />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="flex flex-col justify-between h-full">
        <WidgetList />
        <div className="drawer-buttons gap-1 flex">
          <AddWidgetButton btnName={"Cancel"} />
          <AddWidgetButton btnName={"Confirm"} />
        </div>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
