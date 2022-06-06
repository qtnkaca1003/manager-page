import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <>
      <Box
       
        borderBottom={"solid 1px #f5f6f8"}
        color={"#3d5170"}
        fontWeight="500"
        fontSize={"17px"}
        _hover={{
          color: "#000",
        }}
      >
        <Link href={"/"}>
          <a>
            <Text ml={7} p={5}>
              Dashboard
            </Text>
          </a>
        </Link>
      </Box>
    </>
  );
};
export default Home;
