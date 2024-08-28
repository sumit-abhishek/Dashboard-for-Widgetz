import { createContext, useState } from "react";
import initialData from "../Data.json";

export const DashboardContext = createContext(null);

export const DashboardProvider = (props) => {
  const [categories, setCategories] = useState(initialData.categories);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const addWidgetToCategory = (widgetName) => {
    if (selectedCategory) {
      const newWidget = {
        id: widgetName.toLowerCase().replace(/\s+/g, "-"),
        name: widgetName,
        data: {},
      };
      const updatedWidgets = [...selectedCategory, newWidget];
      setSelectedCategory(updatedWidgets);
      const updatedCategories = categories.map((category) => {
        if (category.widgets === selectedCategory) {
          return {
            ...category,
            widgets: updatedWidgets,
          };
        }
        return category;
      });

      setCategories(updatedCategories);
      setSelectedCategory(
        updatedCategories.find(
          (category) => category.id === selectedCategory.id
        )
      );
    }
  };

  const removeWidgetFromCategory = (widgetId) => {
    if (selectedCategory) {
      const updatedCategories = categories.map((category) => {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      });
      setCategories(updatedCategories);
      setSelectedCategory(null);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        categories,
        setCategories,
        open,
        setOpen,
        toggleDrawer,
        selectedCategory,
        setSelectedCategory,
        addWidgetToCategory,
        removeWidgetFromCategory,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};
