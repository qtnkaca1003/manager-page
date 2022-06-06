import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CButtonFl from "../../../components/atoms/button";
import CAvatar from "../../../components/atoms/avatar";
import CFormUser from "../../../components/organisms/form/adduser";
import { IconPlusUser } from "../../../components/atoms/icons/IconUserPlus";
import CTitle from "../../../components/atoms/title";
import { useAppSelector } from "../../../hook";
import CAddUser from "../../../components/organisms/main/adduser";

const AddUser = () => {
  const listUser = useAppSelector((state) => state.users.propsUsers);
  return (
    <>
      <Box padding={"0 24px"}>
      <CAddUser />
      </Box>
    </>
  );
};
export default AddUser;
