import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IAccount } from "../../../types/interface";
interface IProps {
  data: IAccount[];
}
const TCreate= (createProps: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  const bgTr = colorMode === "dark" ? "#7393B3 " : "#F5F6F8";
  const colorEdit = colorMode === "dark" ? "#000" : "#4A5568";
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                User
              </Th>
            </Tr>
          </Thead>
          <Thead fontSize={"15px"} background={"#f5f6f8"}>
            <Tr bg={bgTr} h={"47px"}>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                ID
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                First Name
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Last Name
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Email
              </Th>

              <Th p={"12px"} textTransform={"none"} fontSize={"16px"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {createProps.data?.map((item: IAccount, index:number) => {
              return (
                <Tr key={index}>
                  <Td p={"12px"}>{item.id}</Td>
                  <Td p={"12px"}>{item.first_name}</Td>
                  <Td p={"12px"}>{item.last_name}</Td>
                  <Td p={"12px"}>{item.email}</Td>
                  <Td p={"12px"}></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TCreate;
