import { MenuItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IMenuItem {
  contentMenuItem: string;
  borderRadius?: string;
  color?: string;
  widthItem?: string;
  fontSize?: string;
  fontWeight?: string;
  heightItem?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CMenuItem = (menuItemProps: IMenuItem) => {
  return (
    <>
      <MenuItem
        onClick={menuItemProps.onClick}
        width={menuItemProps.widthItem}
        height={menuItemProps.heightItem}
      >
        {menuItemProps.contentMenuItem}
      </MenuItem>
    </>
  );
};
export default CMenuItem;
