import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector } from "../../hook";
import Login from "../../pages/login";
import { Footer } from "../organisms/footer";
import { Header1 } from "../organisms/header/header1";
export default function Template1({ children }: any) {
  
  const router = useRouter();
  const token = useAppSelector((state) => state.addToken.token.token);
  useEffect(() => {
   
    if (token === "") {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token]);
  return (
    <>
      {token != "" ? (
        <>
          <Header1 />
          <Box position={"relative"} height={"100vh"} w={"100%"}>
            <main>{children}</main>
          </Box>
          <Footer mt={"30px"} top={"100%"} position={"absolute"} />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
