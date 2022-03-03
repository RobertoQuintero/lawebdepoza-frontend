import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPlaces } from "../actions/places";
import CategoriesScreen from "../components/categories/CategoriesScreen";
import HomeScreen from "../components/home/HomeScreen";

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
