import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { addUser, addUserEdit } from "../../../redux/slices/userSlices";
import apiUser from "../../../api/User";
import CButton from "../../../components/atoms/button";
import CCard from "../../molecules/card";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { IUser } from "../../../types/interface";
import CFormEditUser from "../form/edituser/FormEditUser";
import CFormEditUserAfter from "../form/edituser/FormEditUserAfter";

const CEditUser = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  const dispatch = useAppDispatch();
  const [userEdit, setUserEdit] = useState<IUser>({
    avatar: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
    password: "",
  });
  useEffect(() => {
    const getUser = () => {
      apiUser.getUser(id).then((res) => {
        dispatch(addUser(res.data.data));
        setUserEdit(res.data.data);
      });
    };
    getUser();
  }, [id]);
  const handleBack = () => {
   
    router.push("/list-user/1");
  };
  const user = useAppSelector((state) => state.users.User);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <CButton type={"button"} title="Back" onClick={handleBack} />
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            User Profile
          </Text>
        </Box>
        <Grid display={"flex"} templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem shadow={"2xl"} borderRadius={5} w="50%">
            {" "}
            <CCard
              fontWeightTitle={"500"}
              srcAvatar={user.avatar}
              sizeAvatar={"2xl"}
              titleTitle={user.first_name + " " + user.last_name}
            />
          </GridItem>
          <GridItem shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"2xl"} fontWeight={"600"}>
                {" "}
                Account Details
              </Text>
              <CFormEditUser data={userEdit} />
            </Box>
            <Box mt={5} p={"16px"}>
              <Text fontSize={"2xl"} fontWeight={"600"}>
                {" "}
                After Edit
              </Text>
              <CFormEditUserAfter />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default CEditUser;
