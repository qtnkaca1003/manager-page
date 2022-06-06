import { Box } from "@chakra-ui/react";
import React from "react";
import  CInput  from "../components/atoms/input";
const Header = () => {
  return (
    <>
      <Box boxShadow="2xl" maxW={"100vw"}>
        <Box maxW={"630px"}>
          <CInput placeholder="Test..." />
        </Box>
      </Box>
    </>
  );
};
export default Header
