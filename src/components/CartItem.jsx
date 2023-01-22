import React from "react";

function CartItem({ value, title, img, increment, decrement }) {
  return (
    <>
      <div className="row">
        <div className="col-xl-4">
          <div className="card cart-item">
            <div className="card-header">
              <h4>{title}</h4>
            </div>
            <div className="card-body">
              <img loading="lazy" src={img} alt={img.name} title={img.name} />
            </div>
            <div className="card-footer">
              <button type="button" className="btn" onClick={decrement}>
                -
              </button>
              <input
                type="number"
                className="w-25 mx-3 p-1"
                value={value}
                readOnly
              />
              <button type="button" className="btn" onClick={increment}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
