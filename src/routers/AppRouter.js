import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPlaces } from "../actions/places";
import CategoriesScreen from "../components/categories/CategoriesScreen";
import PlacesScreen from "../components/places/PlacesScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PlacesScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/*" element={<PlacesScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
