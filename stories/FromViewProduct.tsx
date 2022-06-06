import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../types/interface";
interface IPropsProduct {
  product: IProduct | undefined;
}
const CFromViewroduct = (props: IPropsProduct) => {
  return (
    <Box>
      <Box>
        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="title">
            Title
          </FormLabel>
          <Input
            readOnly
            value={props.product?.title}
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
          readOnly
          value={props.product?.price}
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
          readOnly
          value={props.product?.category}
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
          readOnly
          defaultValue={props.product?.description}
          placeholder="Description..."
        />
      </FormControl>
    </Box>
  );
};
export default CFromViewroduct;
