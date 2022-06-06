import { Table, Td, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModalDel from "../components/molecules/modal";

import { IProduct } from "../types/interface";
interface IProps {
  product: IProduct;
}
const CTable = (props: IProps) => {
  return (
    <> <Table>
    <Tr>
      <Td p={"12px"}>{props.product.id}</Td>
      <Td p={"12px"}>{props.product.title.slice(0, 5)}</Td>
      <Td p={"12px"}>{props.product.category}</Td>
      <Td p={"12px"}>{props.product.description.slice(0, 10)}</Td>
      <Td p={"12px"}>{props.product.price}</Td>
      {/* <Td>{user.phone}</Td> */}
      <Td p={"12px"}>
        <Link href={`/edit/product/${props.product.id}`}>
          <a className="chakra-button css-6urt9f"> Edit</a>
        </Link>
        <ModalDel id={"1"} title="Do you want to delete your products?" />
      </Td>
      </Tr>
      </Table>
    </>
  );
};
export default CTable;
