import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IButtonFl {
  title: string;
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  icon?: ReactNode;
}
const CButtonFl = (props: IButtonFl) => {
  return (
    <>
      <Button
        w={props.width}
        h={props.height}
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        color={props.color}
        borderRadius={props.borderRadius}
      >
        {props.icon} {props.title}
      </Button>
    </>
  );
};
export default CButtonFl;
