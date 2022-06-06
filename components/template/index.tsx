import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector } from "../../hook";
import Login from "../../pages/login";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";
import { Navigation } from "../organisms/navigation";
export default function Template({ children }: any) {
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
        <Box position={"relative"} display={"flex"}>
          <Navigation />
          <Box w={"100%"}>
            <Header />
            <main>{children}</main>
          </Box>
          <Footer mt="30px" top={"100%"} position={"absolute"} />
        </Box>
       ) : (
        <>
          <Login />
        </>
      )} 
    </>
  );
}
