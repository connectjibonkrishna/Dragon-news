import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <main className="w-11/12 mx-auto mt-5 grid grid-cols-12">
        <aside className="col-span-3 mr-5">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 ml-5">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
