import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CLink from "../../atoms/link";
interface ICLinknavi {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  icon?: ReactNode;
  link: string;
  title: string;
  id?: string;
  padding?: string;
  borderLeft?: string;
  display?: string;
  borderBottom?: string;
  lineHeight?: string;
  textAlign?: any;
  alignItems?: any;
  fill?: string;
  w?: string;
  _hover?: {};
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const CLinknavi = (linknaviProps: ICLinknavi) => {
  return (
    <>
      <Box
        borderBottom={linknaviProps.borderBottom}
        textAlign={linknaviProps.textAlign}
        onClick={linknaviProps.onClick}
        padding={linknaviProps.padding}
        borderLeft={linknaviProps.borderLeft}
        display={linknaviProps.display}
        alignItems={linknaviProps.alignItems}
        lineHeight={linknaviProps.lineHeight}
        w={linknaviProps.w}
        _hover={linknaviProps._hover}
      >
        <Box fill={linknaviProps.fill}>{linknaviProps.icon}</Box>
        <CLink
         
          color={linknaviProps.color}
          fontSize={linknaviProps.fontSize}
          fontWeight={linknaviProps.fontWeight}
          title={linknaviProps.title}
          link={linknaviProps.link}
        />
      </Box>
    </>
  );
};
export default CLinknavi;
