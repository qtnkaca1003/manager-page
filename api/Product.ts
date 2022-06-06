import { IProduct } from "./../types/interface";
import Axios from "./Axios";

const apiProduct = {
  getAll: () => {
    const url = `/products`;
    return Axios.get(url);
  },
  getCategory:()=>{
    const url=`/products/categories`;
    return Axios.get(url)
  },
  addProduct: (data: IProduct) => {
    const url = `/products`;
    return Axios.post(url, data);
  },
  editProduct: (id: string|undefined, data: IProduct) => {
    const url = `/products/${id}`;
    return Axios.put(url, data);
  },
};
export default apiProduct;
