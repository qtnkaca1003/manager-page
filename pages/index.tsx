import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import apiProduct from "../api/Product";
import CTitle from "../components/atoms/title";
import { useAppDispatch } from "../hook";
import { addCategory, addProducts } from "../redux/slices/productSlices";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
   /*  localStorage.setItem("change", "template1"); */
    const getAllProduct = () => {
      apiProduct.getAll().then((res) => {
        dispatch(addProducts(res.data));
      });
    };
    const getAllCategory = () => {
      apiProduct.getCategory().then((res) => {
        dispatch(addCategory(res.data));
      });
    };
    /*  const getAllUser = () => {
      apiUser.getAll().then((res) => {
        dispatch(addUser(res.data));
      });
    }; */
    getAllCategory();
    getAllProduct();
    //getAllUser();
  });
  return (
    <>
      <Box w={"1oo%"} mt={10} textAlign={"center"}>
        {" "}
        <CTitle title="Dashboard" fontWeight="bold" fontSize="5xl" />
      </Box>
      
    </>
  );
};

export default Home;
