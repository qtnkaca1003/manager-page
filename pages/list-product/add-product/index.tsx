import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import CFormAddProduct from "../../../components/organisms/form/addproduct";

const AddProduct = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#3d5170";
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={color} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Add Product
          </Text>
        </Box>
        <Box shadow={"2xl"} p={"16px"}>
          <CFormAddProduct />
        </Box>
      </Box>
    </>
  );
};
export default AddProduct;
