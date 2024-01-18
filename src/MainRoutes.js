import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";
import Layout from "./components/Layout";

//! устанавливаем библиотеку npm i react-router-dom
// ! Обернуть App в BrowserRouter
// ! Создаем файл MainRoutes в src (пока в src)
// ! Настраиваем роуты
// ! Navbar  потом

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default MainRoutes;

//route принимает 2 параметра - 1) путь /shop, например
