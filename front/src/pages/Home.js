import React from "react";
import Carousel from "../components/Carousel";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import NewSletter from "../components/NewSletter";
import Products from "../components/Products";
export default function Home() {
  return (
    <div>
      <div className=" mb-4">
        <Carousel />
      </div>
      <Brands />
      <Categories />
      <NewSletter />
      <Products />
    </div>
  );
}
