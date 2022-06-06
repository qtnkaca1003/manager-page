import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
interface ILink {
  link: string;
  title: string;
  id?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  _hover?:any
}
const CLink = (linkProps: ILink) => {
  /* const [menuActive, setMenuState] = useState<number>(0);
  const handleClick = (index: any) => {
    const id = index.target.id;
    setMenuState(id);
  }; */
  return (
    
      <Link  style={{ width: "100%" }} href={linkProps.link}>
        <a>
          <Text
            fontWeight={linkProps.fontWeight}
            color={linkProps.color}
            fontSize={linkProps.fontSize}
            w={"100%"}
            id={linkProps.id}
          >
            {linkProps.title}
          </Text>
        </a>
      </Link>
    
  );
};
export default CLink;
