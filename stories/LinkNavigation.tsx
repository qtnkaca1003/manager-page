import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CartIcon } from "../components/atoms/icons/CartIcon";
import { IconPlusUser } from "../components/atoms/icons/IconUserPlus";
import { IconList } from "../components/atoms/icons/list";
const LinkNavigation = () => {
  return (
    <>
      <Box>
        <Link href={"/list-user/1"}>
          <a>
            <Text
              lineHeight={"16px"}
              color={"#3d5170"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <IconList />
              List user
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/list-product/1"}>
          <a>
            <Text
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <IconList />
              List Product
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/add-user"}>
          <a>
            <Text
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <IconPlusUser />
              User Profile
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/add-product"}>
          <a>
            <Text
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <CartIcon />
              Add Product
            </Text>
          </a>
        </Link>
      </Box>
    </>
  );
};
export default LinkNavigation;
