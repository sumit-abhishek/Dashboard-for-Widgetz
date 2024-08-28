import React, { useContext } from "react";
import Categories from "../Components/Dashboard/Categories/Categories";
import DashboardHeader from "../Components/Dashboard/Dashboard Header/DashboardHeader";
import AddWidgetDrawer from "../Components/Drawer/AddWidgetDrawer";
import { DashboardContext } from "../Context/DashboardContext";
const Dashboard = () => {
  const { categories } = useContext(DashboardContext);
  return (
    <>
      <AddWidgetDrawer />
      <div className="w-full px-32 py-4">
        <DashboardHeader />
        {categories.map((category) => (
          <Categories key={category.id} categoryData={category} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
