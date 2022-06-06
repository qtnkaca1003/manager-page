import React, { useEffect } from "react";
import { IProduct } from "../../types/interface";
import ListProduct from "../../components/organisms/main/list-product";
import { GetServerSideProps } from "next";
import apiProduct from "../../api/Product";
import { useAppDispatch } from "../../hook";
import { addProduct } from "../../redux/slices/productSlices";
interface IProps {
  products: IProduct;
  status: number;
}
const ViewListProduct = ({ products, status }: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addProduct(products))
  }, [products]);
  return (
    <>
      <ListProduct  status={status} products={products} />
    </>
  );
};
export default ViewListProduct;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page: string | string[] | number = query.id || 1;
  const data = await (await apiProduct.getAll()).data;

  const itemPerPage = 5;
  const currenPage = Number(page);
  const indexOfLastItem = currenPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  return {
    props: {
      products: currentItem,
      status: (data.status = "200"),
    },
  };
};
