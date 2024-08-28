import React from "react";
import Card from "@mui/material/Card";
import AddWidgetButton from "../../AddWidgetButton";

export default function Cards({ name }) {
  return (
    <Card
      className="shadow-md tw-shadow-gray-950"
      sx={{
        width: "25%",
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {name ? <h1>{name}</h1> : <AddWidgetButton btnName={"Add Widget"} />}
    </Card>
  );
}
