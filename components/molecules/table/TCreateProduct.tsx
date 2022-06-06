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
import { IProduct } from "../../../types/interface";
interface IProps {
  data: IProduct[];
}
const TCreateProduct = (createProductProps: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  const bgTr = colorMode === "dark" ? "#7393B3 " : "#F5F6F8";
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                Product
              </Th>
            </Tr>
          </Thead>
          <Thead fontSize={"15px"} background={"#f5f6f8"}>
            <Tr  bg={bgTr} h={"47px"}>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                ID
              </Th>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                Title
              </Th>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                Price
              </Th>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                Category
              </Th>
              <Th
                color={color}
                p={"12px"}
                textTransform={"none"}
                fontSize={"16px"}
              >
                Description
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {createProductProps.data?.map((item: IProduct, index: number) => {
              return (
                <Tr key={index}>
                  <Td p={"12px"}>{item.id}</Td>
                  <Td p={"12px"}>{item.title}</Td>
                  <Td p={"12px"}>{item.price}</Td>
                  <Td p={"12px"}>{item.category}</Td>
                  <Td p={"12px"}>{item.description}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TCreateProduct;
