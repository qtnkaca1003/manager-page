import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { FC } from "react";
import CFormLogin from "../form/login";
import CFormRegister from "../form/register";

const CTabs = () => {
  return (
    <Box
      className="login__center"
      width={"500px"}
      shadow={"2xl"}
      borderRadius={"10px"}
      padding={"10px 10px"}
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CFormLogin />
          </TabPanel>
          <TabPanel>
            <CFormRegister />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default CTabs;
