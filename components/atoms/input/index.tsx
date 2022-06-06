import { Input } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
interface IInput {
  placeholder?: string;
  border?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  type?: string;
  focusBorderColor?: string;
  width?: string;
  height?: string;
  value?: string;
  readOnly?: boolean;
  outline?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CInput = (inputProps: IInput) => {
  
  return (
    <Input
      readOnly={inputProps.readOnly}
      outline={inputProps.outline}
      width={inputProps.width}
      height={inputProps.height}
      value={inputProps.value}
      defaultValue={inputProps.defaultValue}
      name={inputProps.name}
      id={inputProps.id}
      type={inputProps.type}
      onChange={inputProps.onChange}
      border={inputProps.border}
      focusBorderColor={inputProps.focusBorderColor}
      placeholder={inputProps.placeholder}
    />
  );
};
export default CInput;
