import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiProduct from "../../../../api/Product";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addCreateProduct } from "../../../../redux/slices/productSlices";
import { IProduct } from "../../../../types/interface";
import TCreateProduct from "../../../molecules/table/TCreateProduct";
const CFormProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();
  const categorys = useAppSelector((state) => state.product.category);
  const createProduct = useAppSelector((state) => state.product.createProduct);
  const arrCategorys = Object.assign([], ...categorys);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    apiProduct.addProduct(data).then((res) => {
      dispatch(addCreateProduct(res.data));
    });
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="title">
                Title
              </FormLabel>
              <Input
                {...register("title")}
                name="title"
                id="title"
                type="text"
              />
            </FormControl>
          </Box>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="price">
              Price
            </FormLabel>
            <Input {...register("price")} name="price" id="price" type="text" />
          </FormControl>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="category">
              Category
              <Select
                //name="category"
                id="category"
                {...register("category")}
                //placeholder="Select Category"
              >
                {arrCategorys.map((opt: string, index: any) => {
                  return (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  );
                })}
              </Select>
            </FormLabel>
            {/*  <Input
              {...register("category")}
              name="category"
              id="category"
              type="text"
            /> */}
          </FormControl>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="description">
              Description
            </FormLabel>
            <Textarea
              {...register("description")}
              placeholder="Description..."
            />
          </FormControl>
          <Button color={"#fff"} bg={"blue.300"} type="submit" mt={5}>
            Add product
          </Button>
        </form>
      </Box>
      <TCreateProduct data={createProduct} />
    </>
  );
};
export default CFormProduct;
