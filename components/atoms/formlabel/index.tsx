import { FormLabel } from "@chakra-ui/react";
import React from "react";
interface IFormlabel {
  htmlFor?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  children?: React.ReactNode;
}
const CFormlabel = (FormlabelProps: IFormlabel) => {
  return (
    <FormLabel
      htmlFor={FormlabelProps.htmlFor}
      fontWeight={FormlabelProps.fontWeight}
      color={FormlabelProps.color}
      fontSize={FormlabelProps.fontSize}
    >
     
      {FormlabelProps.children}
    </FormLabel>
  );
};
export default CFormlabel;
