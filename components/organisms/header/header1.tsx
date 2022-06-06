import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Container, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../../hook";
import { addUserEdit, deleteToken } from "../../../redux/slices/userSlices";
import { IToken, IUser } from "../../../types/interface";
import CButton from "../../atoms/button";
import { SwitchIcon } from "../../atoms/icons/SwitchIcon";
import CDropDown from "../../molecules/dropdownmenu";
import CLinknavi from "../../molecules/linknavi";
const button = [
  {
    link: "/list-user/1",
    /*  icon: <IconList />, */
    title: "LIST USER",
    id: "1",
  },
  {
    link: "/list-product/1",
    /* icon: <IconList />, */
    title: "LIST PROUDCT",
    id: "2",
  },
  {
    link: "/list-user/add-user",
    /*  icon: <IconPlusUser />, */
    title: "ADD USER",
    id: "3",
  },
  {
    link: "/list-product/add-product",
    /*  icon: <CartIcon />, */
    title: "ADD PRODUCT",
    id: "4",
  },
];
export const Header1 = () => {
  const dispatch = useAppDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const handelLogout = () => {
    const token: IToken = {
      token: "",
    };
    dispatch(deleteToken(token));
  };
  const handleBack = () => {
    const userEdit: IUser = {
      avatar: "",
      email: "",
      first_name: "",
      id: "",
      last_name: "",
      password: "",
    };
    dispatch(addUserEdit(userEdit));
  };
  const handelChange = () => {
    const isChange: any = localStorage.getItem("change");
   

    if (isChange === "template1" || isChange == null) {
      localStorage.setItem("change", "template2");
    }
    if (isChange === "template2" || isChange == null) {
      localStorage.setItem("change", "template1");
    }
    location.reload();
  };
  return (
    <>
      <Container maxW={"100vw"} bg={"#7393B3"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <CLinknavi
            color={"#F0FFFF"}
            fontWeight="700"
            fontSize={"20px"}
            title={"DASHBOARD"}
            link={"/"}
          />
          <Box display={"flex"}>
            {" "}
            {button.map((item, index) => {
              return (
                <CLinknavi
                  onClick={handleBack}
                  padding="20px 25px"
                  borderBottom={"solid 4px #7393B3"}
                  fontSize={"17px"}
                  textAlign={"center"}
                  fontWeight={"700"}
                  color={"#F0FFFF"}
                  lineHeight={"16px"}
                  _hover={{
                    background: "#6F8FAF",
                    color: "#007bff",
                    borderBottom: "solid 4px #F0FFFF",
                    fill: "#007bff",
                  }}
                  key={index}
                  //icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              );
            })}{" "}
          </Box>
          <Box alignItems={"center"} display={"flex"}>
            {colorMode === "dark" ? (
              <IconButton
                onClick={toggleColorMode}
                aria-label="Light"
                size="sm"
                icon={<SunIcon />}
              />
            ) : (
              <IconButton
                onClick={toggleColorMode}
                variant="outline"
                aria-label="Dark"
                size="sm"
                icon={<MoonIcon />}
              />
            )}
            <IconButton
              margin={"0px 15px"}
              size="sm"
              aria-label="Switch"
              onClick={handelChange}
              icon={<SwitchIcon />}
            />
            <CDropDown
              onClickMenuItem={handelLogout}
              heightItem={"30px"}
              contentMenuItem="Log out"
              src={"./image/avatar.jpg"}
              color={"#F0FFFF"}
              title="NHAN"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
