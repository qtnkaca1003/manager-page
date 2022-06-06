import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../../hook";
import { deleteToken } from "../../../redux/slices/userSlices";
import { IToken } from "../../../types/interface";
import CButton from "../../atoms/button";
import { SwitchIcon } from "../../atoms/icons/SwitchIcon";
import CDropDown from "../../molecules/dropdownmenu";
import CSearch from "../../molecules/search";
/* interface IHeader {
  src: string;
  placeholder?: string;
  onClickMenuItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
} */
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    const token: IToken = {
      token: "",
    };
    dispatch(deleteToken(token));
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
      <Box
        h={"60px"}
        lineHeight={"60px"}
        boxShadow="2xl"
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CSearch placeholder="Search for something..." />

        <Box display={"flex"} alignItems={"center"}>
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
    </>
  );
};
