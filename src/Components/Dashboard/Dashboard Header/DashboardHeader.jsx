import React from "react";
import AddWidgetButton from "../../AddWidgetButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CachedIcon from "@mui/icons-material/Cached";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
const DashboardHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">CNAPP Dashboard</h1>
      <div className="flex">
        <AddWidgetButton btnName={"Add Widget"} btnEndIcon={<AddIcon />} />
        <AddWidgetButton btnSize={"medium"} btnEndIcon={<CachedIcon />} />
        <AddWidgetButton btnSize={"medium"} btnEndIcon={<MoreVertIcon />} />
        <AddWidgetButton
          btnName={"Last 2 Days"}
          btnStartIcon={<WatchLaterIcon />}
          btnEndIcon={<ArrowDropDownIcon />}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
