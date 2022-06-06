import { Text } from "@chakra-ui/react";
import React from "react";

interface ITitle {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}
const CTitle = (props: ITitle) => {
  return (
    <>
      <Text
        fontWeight={props.fontWeight}
        color={props.color}
        fontSize={props.fontSize}
      >
        {props.title}
      </Text>
    </>
  );
};
export default CTitle;
