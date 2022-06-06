import { Box, useColorMode } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../../hook";
import { addUserEdit } from "../../../redux/slices/userSlices";
import { IUser } from "../../../types/interface";
import { CartIcon } from "../../atoms/icons/CartIcon";
import { IconPlusUser } from "../../atoms/icons/IconUserPlus";
import { IconList } from "../../atoms/icons/list";
import CLinknavi from "../../molecules/linknavi";
const button = [
  {
    link: "/list-user/1",
    icon: <IconList />,
    title: "List user",
    id: "1",
  },
  {
    link: "/list-product/1",
    icon: <IconList />,
    title: "List Product",
    id: "2",
  },
  {
    link: "/list-user/add-user",
    icon: <IconPlusUser />,
    title: "Add User",
    id: "3",
  },
  {
    link: "/list-product/add-product",
    icon: <CartIcon />,
    title: "Add Product",
    id: "4",
  },
];

export const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();
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
  const fill = colorMode === "dark" ? "#fff" : "#000";
  const color = colorMode === "dark" ? "#fff" : "#000";
  const background = colorMode === "dark" ? "#7393B3" : "#EDF2F7";
  const colorHover = colorMode === "dark" ? "#fff" : "#0000FF";
  const fillHover = colorMode === "dark" ? "#fff" : "#0000FF";

  return (
    <>
      <Box minH={"100vh"} boxShadow="2xl" /* bg="white" */ w={"320px"}>
        <CLinknavi
          color={color}
          fontWeight="500"
          fontSize={"17px"}
          padding="20px 45px"
          title={"Dashboard"}
          link={"/"}
        />
        {colorMode === "dark"
          ? button.map((item, index) => {
              return (
                <CLinknavi
                  color={color}
                  onClick={handleBack}
                  padding="20px 25px"
                  display={"inline-flex"}
                  lineHeight={"16px"}
                  w={"100%"}
                  _hover={{
                    background: "#6F8FAF",
                  }}
                  fill={fill}
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              );
            })
          : button.map((item, index) => {
              return (
                <CLinknavi
                  //color={color}
                  onClick={handleBack}
                  padding="20px 25px"
                  borderLeft={"solid 4px #fff"}
                  display={"inline-flex"}
                  lineHeight={"16px"}
                  w={"100%"}
                  _hover={{
                    background: "#f5f6f8",
                    color: "#007bff",
                    borderLeft: "solid 4px #007bff",
                    fill: "#007bff",
                  }}
                  //fill={fill}
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              );
            })}
        {}
      </Box>
    </>
  );
};
