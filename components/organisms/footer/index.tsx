import { Box } from "@chakra-ui/react";
import React from "react";
import CText from "../../atoms/text";
interface IFooter {
  position?: any;
  right?: number;
  top?: number | string;
  left?: number;
  bottom?: number;
  mt?: string;
  minHeight?: string | number;
  w?: string | number;
}
export const Footer = (footerProps: IFooter) => {
  return (
    <Box
      w={footerProps.w}
      mt={footerProps.mt}
      minHeight={footerProps.minHeight}
      position={footerProps.position}
      top={footerProps.top}
      left={footerProps.left}
      bottom={footerProps.bottom}
      right={footerProps.right}
      h={"60px"}
      lineHeight={"60px"}
      boxShadow="2xl"
      //bg="white"
      width={"100%"}
      textAlign={"center"}
    >
      <CText textAlign="center" title="Copyright © 2018 DesignRevision" />
    </Box>
  );
};
