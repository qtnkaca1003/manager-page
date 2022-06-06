import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IButton {
  title: string;
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  colorScheme?: string;
  icon?: ReactNode;
  m?: string | number;
  type: "button" | "submit" | "reset";
  mt?: string | number;
  mr?: string | number;
  ml?: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CButton = (ButtonProps: IButton) => {
  return (
    <>
      <Button
        ml={ButtonProps.ml}
        mr={ButtonProps.mr}
        m={ButtonProps.m}
        type={ButtonProps.type}
        mt={ButtonProps.mt}
        disabled={ButtonProps.disabled}
        className={ButtonProps.className}
        colorScheme={ButtonProps.colorScheme}
        w={ButtonProps.width}
        h={ButtonProps.height}
        fontWeight={ButtonProps.fontWeight}
        fontSize={ButtonProps.fontSize}
        color={ButtonProps.color}
        borderRadius={ButtonProps.borderRadius}
        onClick={ButtonProps.onClick}
      >
        {ButtonProps.icon} {ButtonProps.title}
      </Button>
    </>
  );
};
export default CButton;
