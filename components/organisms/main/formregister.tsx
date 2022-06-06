import { Box } from "@chakra-ui/react";

import CFormRegister from "../form/register";

const FromRegister = () => {
  return (
    <Box
      className="login__center"
      width={"500px"}
      shadow={"2xl"}
      borderRadius={"10px"}
      padding={"10px 10px"}
    >
      <CFormRegister />
    </Box>
  );
};

export default FromRegister;
