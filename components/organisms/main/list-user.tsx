import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { deleteUser } from "../../../redux/slices/userSlices";
import { IPage, IUser } from "../../../types/interface";
import CHeadmain from "../../molecules/headmain";
import TUser from "../../molecules/table/TUser";
interface IProps {
  users: IUser[];
  status: number;
  pages: IPage;
}
const ListUser = (listUserProps: IProps) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  
  const [search, setSearch] = useState<string>("");
  const listUser = useAppSelector((state) => state.users.propsUsers);

  const toAddUser = () => {
    router.push("/list-user/add-user");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredUsers = listUser.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.first_name.toLowerCase().indexOf(query) >= 0 ||
      item.last_name.toLowerCase().indexOf(query) >= 0 ||
      item.email.toLowerCase().indexOf(query) >= 0
    );
  });
  const dispatch = useAppDispatch();
  const handleDelete = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const id = currentTarget.value;
    dispatch(deleteUser(id));
   
  };
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          {" "}
          <CHeadmain
            onClickBtn={toAddUser}
            onChangeSearch={handelChange}
            color={color}
            fontSize={"3xl"}
            fontWeight={"600"}
            title="List user"
            placeholder="Search for something..."
            titleBtn="+ Add user"
          />
        </Box>
        <Box shadow={"2xl"}  borderRadius={"10px"}  padding={"24px 0"}>
          <TUser
           
            onClickBtn={handleDelete}
            data={listUserProps.pages}
            status={listUserProps.status}
            filteredUsers={filteredUsers}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
