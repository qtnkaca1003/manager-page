import { Table, Td, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModalDel from "../components/molecules/modal";

import { IUser } from "../types/interface";
interface IProps {
  user: IUser;
}
const TUser = (props: IProps) => {
  return (
    <>
      <Table>
        <Tr>
         {/*  <Td p={"12px"}>{props.user.id}</Td>
          <Td p={"12px"}>{props.user.name.firstname}</Td>
          <Td p={"12px"}>{props.user.name.lastname}</Td>
          <Td p={"12px"}>{props.user.address.city}</Td>
          <Td p={"12px"}>{props.user.address.street}</Td>
          <Td p={"12px"}>{props.user.address.zipcode}</Td>
          <Td p={"12px"}>{props.user.phone}</Td>
         */} <Td p={"12px"}> 
            <Link href={`/edit/user/${props.user.id}`}>
              <a className="chakra-button css-6urt9f"> Edit</a>
            </Link>
            <ModalDel id={"12"} title="Do you want to delete your account?" />
          </Td>
        </Tr>
      </Table>
    </>
  );
};
export default TUser;
