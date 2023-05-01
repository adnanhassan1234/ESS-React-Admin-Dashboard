import React from "react";

const ProductCard = (content) => {
  const { title, price, description, category, image } = content;

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="card_content my-3">
          <div class="card p-3">
            <img
              src={image}
              class="card-img-top"
              alt="..."
              width={20}
              height={150}
            />
            <div class="card-body p-0 my-2">
              <h5 class="card-title">{title.slice(0, 17)}..</h5>
              <p class="card-text"> {description.slice(0, 40)}...</p>
              <h5>Rs: {price}</h5>
              <button href="#" class="btn btn-info my-2" width="100%">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
