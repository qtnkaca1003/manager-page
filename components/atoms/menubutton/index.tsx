import { Button, MenuButton } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface IMenuButton {
  borderRadius?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  display?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: () => (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
}
const CMenuButton  = ( menuButtonProps: IMenuButton) => {
  return (
    <MenuButton display={"flex"} as={Button}>
      {menuButtonProps.children}
    </MenuButton>
  );
};
export default CMenuButton;
