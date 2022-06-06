import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { deleteProduct } from "../../../redux/slices/productSlices";
import { IProduct } from "../../../types/interface";
import CHeadmain from "../../molecules/headmain";
import TProduct from "../../molecules/table/TProduct";
interface IProps {
  products: IProduct[];
  status: number;
}

const ListProduct = (listProductProps: IProps) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const product = useAppSelector((state) => state.product.propsProduct);
  const products = useAppSelector((state) => state.product.propsProducts);
  const { colorMode, toggleColorMode } = useColorMode();
  //const arrProduct = Object.assign([], ...products);
  const dispatch = useAppDispatch();
  const toAddProduct = (props: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/list-product/add-product");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredProduct = product?.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().indexOf(query) >= 0 ||
      item.category.toLowerCase().indexOf(query) >= 0 ||
      item.description.toLowerCase().indexOf(query) >= 0
    );
  });

  const handleDelete = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const id = currentTarget.value;
    dispatch(deleteProduct(id));
  };
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          {" "}
          <CHeadmain
            color={color}
            fontSize={"3xl"}
            fontWeight={"600"}
            onChangeSearch={handelChange}
            title="List product"
            placeholder="Search for something..."
            titleBtn="+ Add product"
            onClickBtn={toAddProduct}
          />
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TProduct
            data={products}
            status={listProductProps.status}
            filteredProduct={filteredProduct}
            onClickBtn={handleDelete}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListProduct;
