import { Text } from "@chakra-ui/react";
import React from "react";
interface ITitle {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  
}
const CTitle = (titleProps: ITitle) => {
  return (
    <>
      <Text
       
        className="text"
        fontWeight={titleProps.fontWeight}
        color={titleProps.color}
        fontSize={titleProps.fontSize}
      >
        {titleProps.title}
      </Text>
    </>
  );
};
export default CTitle;
