import { Box, Link } from "@chakra-ui/react";
import CFormLogin from "../form/login";

const FromLogin = () => {
  return (
    <Box
      className="login__center"
      width={"500px"}
      shadow={"2xl"}
      borderRadius={"10px"}
      padding={"10px 10px"}
    >
      <CFormLogin />
      <Link href="/register">Register</Link>
    </Box>
  );
};

export default FromLogin;
