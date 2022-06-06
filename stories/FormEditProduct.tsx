import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../hook";
import { IProduct } from "../types/interface";

const CFormEditProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();
  const product = useAppSelector((state) => state.product.product);
 

  const onSubmit: SubmitHandler<IProduct> = (data) => {};
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="title">
              Title
            </FormLabel>
            <Input
              defaultValue={product.title}
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
          <Input
            defaultValue={product.price}
            {...register("price")}
            name="price"
            id="price"
            type="text"
          />
        </FormControl>

        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="category">
            Category
          </FormLabel>
          <Input
            defaultValue={product.category}
            {...register("category")}
            name="category"
            id="category"
            type="text"
          />
        </FormControl>
        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            defaultValue={product.description}
            placeholder="Description..."
          />
        </FormControl>
        {/*  <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="image">
            Image
          </FormLabel>
          <Input
            border={"none"}
            {...register("image")}
            name="image"
            id="image"
            type="file"
          />
        </FormControl> */}

        <Button bg={"blue.300"} type="submit" mt={5}>
          Add product
        </Button>
      </form>
    </Box>
  );
};
export default CFormEditProduct;
