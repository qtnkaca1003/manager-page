import { Avatar, WrapItem } from "@chakra-ui/react";
import React from "react";
interface ICard {
  size?: string;
  src: string;
  m?:string
}
const CAvatar = (AvatarProps: ICard) => {
  return (
    <>
      <WrapItem>
        <Avatar m={AvatarProps.m} size={AvatarProps.size} src={AvatarProps.src} />{" "}
      </WrapItem>
    </>
  );
};
export default CAvatar;
