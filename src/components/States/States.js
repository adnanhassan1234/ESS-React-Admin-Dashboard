import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import StateCard from "./StateCard";
import "./state.scss";

const cardData = [
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    bgColor: "#3F84FC",
    title: "Primary",
    price: "$100",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Secondary",
    bgColor: "#727E93",
    price: "$100",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Success",
    price: "$100",
    bgColor: "#1DAB47",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Info",
    price: "$100",
    bgColor: "#8A3FFC",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Warning",
    price: "$100",
    bgColor: "#FD7E14",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Danger",
    price: "$100",
    bgColor: "#FC413F",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Light",
    price: "$100",
    bgColor: "#F8F9FA",
    discount: "+17.5%",
    color: "#3D4044",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Dark",
    price: "$100",
    bgColor: "#1E232D",
    discount: "+17.5%",
  },
];

const whiteColor = "#fff";

const States = () => {
  const [item, setItem] = useState(cardData);
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="states my-5">
          <div className="container">
            <h2>Stats</h2>
            <div className="row mt-3">
              {item?.map((content, ind) => {
                return <StateCard key={ind} {...content} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default States;
