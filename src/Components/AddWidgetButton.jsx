import { useContext } from "react";
import Button from "@mui/material/Button";
import { DashboardContext } from "../Context/DashboardContext";

export default function AddWidgetButton({
  btnName,
  btnEndIcon,
  btnSize,
  btnStartIcon,
}) {
  const dashboard = useContext(DashboardContext);
  const handleClick = () => {
    if (btnName === "Add Widget") {
      dashboard.toggleDrawer(true);
    }
    if (btnName === "Cancel") {
      dashboard.toggleDrawer(false);
    }
  };
  return (
    <Button
      variant="outlined"
      endIcon={btnEndIcon || ""}
      startIcon={"" || btnStartIcon}
      size={btnSize || "small"}
      onClick={handleClick}
      sx={{
        color: "#3d3b3b",
        fontWeight: "600",
      }}
    >
      {btnName || ""}
    </Button>
  );
}
