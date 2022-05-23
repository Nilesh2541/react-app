import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProduct } from "../Store/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { data: product } = useSelector((state) => state.product);
  //   const [product, setProduct] = useState([]);
  //   const fetchProduct = async () => {
  //     await axios("https://fakestoreapi.com/products").then((res) => {
  //       setProduct(res.data);
  //     });
  //   };

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="container">
      <div className="row px-5 pt-5 ">
        {product.map((item, id) => {
          return (
            <div className="col-md-4 card mt-3  " key={id}>
              <div className="card text-center m-2 product border-0 rounded-0 pt-4">
                <img
                  className="img-fluid d-block mx-auto "
                  src={item.image}
                  style={{ height: 200 }}
                  alt="Pilot Aviator Glasses Gear Image"
                />
                <div className="  h-xs-440p">
                  <h5 className="card-title font-weight-semi-bold  w-xl-220p mx-auto">
                    {item.title}
                  </h5>
                  <span className="price">{item.price}</span>
                </div>
                <span className="btn w-100 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-dark btn-lg w-100"
                    name="add-button"
                    value="Buy Now"
                    onClick={() => handleAdd(item)}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
