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
import { IPage, IUser } from "../../../types/interface";
import CAvatar from "../../atoms/avatar";
import Pagination from "../../atoms/buttonpagin";
import ModalDel from "../modal";
interface IProps {
  filteredUsers: IUser[];
  status: number;
  data: IPage;

  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TUser = (TUserProps: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  const bgTr = colorMode === "dark" ? "#7393B3 " : "#F5F6F8";
  const colorEdit = colorMode === "dark" ? "#000" : "#4A5568";
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            <Pagination
              itemPage={5}
              maxPageNumerLitmit={3}
              path="/list-user/"
              pageNumerLitmit={3}
              data={TUserProps.data}
            />
          </TableCaption>
          <Thead>
            <Tr>
              <Th color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                User
              </Th>
            </Tr>
          </Thead>
          <Thead  fontSize={"15px"} background={"#f5f6f8"}>
            <Tr bg={bgTr}  h={"47px"}>
              <Th  color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                #
              </Th>
              <Th  color={color}  p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Avatar
              </Th>
              <Th  color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                First Name
              </Th>
              <Th  color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Last Name
              </Th>
              <Th  color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Email
              </Th>

              <Th  color={color} p={"12px"} textTransform={"none"} fontSize={"16px"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {TUserProps.status == 200 ? (
              TUserProps.filteredUsers?.length == 0 ? (
                <>Not found</>
              ) : (
                TUserProps.filteredUsers?.map((item: IUser, index) => {
                  return (
                    <Tr key={index}>
                      <Td p={"12px"}>{item.id}</Td>
                      <Td p={"12px"}>
                        <CAvatar src={item.avatar} size={"sm"} />
                      </Td>
                      <Td p={"12px"}>{item.first_name}</Td>
                      <Td p={"12px"}>{item.last_name}</Td>
                      <Td p={"12px"}>{item.email}</Td>
                      <Td color={colorEdit} p={"12px"}>
                        <Link href={`/edit/user/${item.id}`}>
                          <a className="chakra-button css-6urt9f"> Edit</a>
                        </Link>
                        <ModalDel
                          title="Delete"
                          id={item.id}
                          onClickBtn={TUserProps.onClickBtn}
                        />
                      </Td>
                      <Td p={"12px"}></Td>
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
export default TUser;
