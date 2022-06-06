import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CFormEditProduct from "../../../components/molecules/formitem/FormEditProduct";
import { Product } from "../../../redux/slices/productSlices";
import { IProduct } from "../../../types/interface";

interface IProps {
  product: IProduct;
}
const EditProduct = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
        dispatch(Product(res.data));
      });
    };
    getProduct();
  });
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Edit Product
          </Text>
        </Box>
        <Box shadow={"2xl"} p={"16px"}>
          <CFormEditProduct />
        </Box>
      </Box>
    </>
  );
};
export default EditProduct;
