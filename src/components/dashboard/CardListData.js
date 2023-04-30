import React from "react";

const CardListData = (content) => {
  const { icon, bgColor, title, price, discount } = content;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div
          className="cardList my-2 text-white"
          style={{ backgroundColor: bgColor }}
        >
          <h4>{title}</h4>
          <h2>{price}</h2>
          <div className="icon d-flex justify-content-between">
            {icon}
            <p>{discount}  <span>from last month</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListData;
