import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");
const productSlice = createSlice({
  name: "product",
  initialState: { data: [] },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProductThunk(dispatch, getState) {
    try {
      await axios("https://fakestoreapi.com/products").then((res) => {
        const data = res.data;
        dispatch(setProduct(data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}
