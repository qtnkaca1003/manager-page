import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiProduct from "../../../api/Product";
import { useAppSelector } from "../../../hook";
import { IProduct } from "../../../types/interface";
const CFormEditProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();
  const products = useAppSelector((state) => state.product.product);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>();
  const router = useRouter();
  const id: string | undefined = router.query.id?.toString();
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    apiProduct.editProduct(id, data).then((res) => {
      setProduct(res.data);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="title">
              Title
            </FormLabel>
            <Input
              defaultValue={products.title}
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
            defaultValue={products.price}
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
            defaultValue={products.category}
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
            defaultValue={products.description}
            placeholder="Description..."
          />
        </FormControl>
        <Button bg={"blue.300"} type="submit" mt={5}>
          Edit product
        </Button>
      </form>
    </Box>
  );
};
export default CFormEditProduct;
