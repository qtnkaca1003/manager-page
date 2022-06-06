import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../../atoms/avatar";
import CTitle from "../../atoms/title";
interface ICard {
  sizeAvatar?: string;
  srcAvatar: string;
  colorTitle?: string;
  fontSizeTitle?: string;
  fontWeightTitle?: string;
  titleTitle: string;
}
const CCard = (cardprops: ICard) => {
  return (
    <Box pt={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <CAvatar size={cardprops.sizeAvatar} src={cardprops.srcAvatar} />
      <CTitle
        color={cardprops.colorTitle}
        fontSize={cardprops.fontSizeTitle}
        fontWeight={cardprops.fontWeightTitle}
        title={cardprops.titleTitle}
      />
    </Box>
  );
};
export default CCard;
