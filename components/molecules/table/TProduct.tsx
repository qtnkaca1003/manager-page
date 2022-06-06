import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IProduct } from "../../../types/interface";
import PaginationProduct from "../../atoms/buttonpagin/paginProduct";
import ModalDel from "../modal";
interface IProps {
  filteredProduct: IProduct[];
  status: number;
  data: IProduct[];
  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const TProduct = (TProductProps: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  const bgTr = colorMode === "dark" ? "#7393B3 " : "#F5F6F8";
  const colorEdit = colorMode === "dark" ? "#000" : "#4A5568";
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            <PaginationProduct
              itemPage={5}
              maxPageNumerLitmit={3}
              path="/list-product/"
              pageNumerLitmit={3}
              data={TProductProps.data}
            />
          </TableCaption>
          <Thead>
            <Tr>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Product
              </Th>
            </Tr>
          </Thead>
          <Thead   fontSize={"15px"} background={"#f5f6f8"}>
            <Tr bg={bgTr} h={"47px"}>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                #
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Title
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Category
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Description
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Price
              </Th>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {TProductProps.status == 200 ? (
              TProductProps.filteredProduct?.length == 0 ? (
                <>Not found</>
              ) : (
                TProductProps.filteredProduct?.map((item: IProduct, index) => {
                  return (
                    <Tr key={index}>
                      <Td p={"12px"}>{item.id}</Td>
                      <Td p={"12px"}>{item.title.slice(0, 20)}</Td>
                      <Td p={"12px"}>{item.category}</Td>
                      <Td p={"12px"}>{item.description.slice(0, 20)}</Td>
                      <Td p={"12px"}>{item.price}</Td>
                      
                      <Td color={colorEdit} p={"12px"}>
                        <Link href={`/edit/product/${item.id}`}>
                          <a className="chakra-button css-6urt9f"> Edit</a>
                        </Link>
                        <ModalDel
                          title="Delete"
                          id={item.id}
                          onClickBtn={TProductProps.onClickBtn}
                        />
                      </Td>
                    </Tr>
                  );
                })
              )
            ) : (
              <>Erorr</>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TProduct;
