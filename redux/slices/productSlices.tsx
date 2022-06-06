import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "../../types/interface";
type initialStateType = {
  product: IProduct;
  category: ICategory[];
  propsProducts: IProduct[];
  propsProduct: IProduct[];
  createProduct: IProduct[];
};
const propsProducts: IProduct[] = [];
const propsProduct: IProduct[] = [];
const createProduct: IProduct[] = [];
const category: ICategory[] = [];
const product: IProduct = {
  id: 0,
  title: "",
  category: "",
  price: 0,
  description: "",
  image: "",
  rating: { rate: 0, count: 0 },
};

const initialState: initialStateType = {
  product,
  category,
  propsProducts,
  propsProduct,
  createProduct,
};
export const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    Product: (state, action: PayloadAction<IProduct>) => {
      state.product.title = action.payload.title;
      state.product.id = action.payload.id;
      state.product.price = action.payload.price;
      state.product.category = action.payload.category;
      state.product.description = action.payload.description;
    },
    addProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.propsProduct = [...action.payload];
    },
    addProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.propsProducts = [...action.payload];
    },
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.category.push(action.payload);
    },
    addCreateProduct: (state, action: PayloadAction<IProduct>) => {
      state.createProduct.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const index = action.payload;
      const indexUserOfObject = state.propsProduct.findIndex((object) => {
        return object.id == action.payload;
      });
      if (index > -1) {
        state.propsProduct.splice(indexUserOfObject, 1);
      }
    },
  },
});
export const {
  Product,
  addCategory,
  addProduct,
  addCreateProduct,
  addProducts,
  deleteProduct,
} = productSlice.actions;
export default productSlice.reducer;
