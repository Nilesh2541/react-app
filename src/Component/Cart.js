import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="container">
      <div className=" row">
        {products.map((product, key) => (
          <div
            className="col-md-4 card product m-2 p-2 align-items-center"
            key={key}
          >
            <img src={product.image} style={{ height: 100 }} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn btn-dark"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
