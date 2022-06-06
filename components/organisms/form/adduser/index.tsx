import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addCreateUser } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CFormlabel from "../../../atoms/formlabel";
import CFromInput from "../../../molecules/formitem";
import TCreate from "../../../molecules/table/TCreate";

const CFormAddUser = () => {
  const methods = useForm();
  const { register, handleSubmit } = useForm<IAccount>();
  const [Error, setError] = useState(false);
  const [textError, setTextError] = useState<string>();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.createUser);
  
  const { colorMode, toggleColorMode } = useColorMode();
 
  const colorScheme = colorMode === "dark" ? "#ADD8E6" : "#fff";
  const onSubmit =(data:any) => {
   
    
    if (
      data.password.length >= 6 &&
      data.password.length <= 18 &&
      data.confirmpassword.length >= 6 &&
      data.confirmpassword.length <= 18
    ) {
      if (data.password === data.confirmpassword) {
        setError(false);
        apiUser.addUser(data).then((res) => {
          dispatch(addCreateUser(res.data));
        });
      } else {
        setError(true);
        setTextError("Password and Confirm Password do mot match");
      }
    } else {
      setError(true);
      setTextError("Password must be 8-16 characters ");
    }
  };
  return (
    <>
      <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}  >
          <Box display={"flex"}>
            <CFromInput
              textformlabel="First name"
              name="first_name"
              idInput="first_name"
              isRequired={true}
              typeInput={"text"}
            />
            <CFromInput
              textformlabel="Last name"
              name="last_name"
              idInput="last_name"
              isRequired={true}
              typeInput={"text"}
            />
          </Box>
          <Box display={"flex"}>
            <CFromInput
              textformlabel="Email"
              name="email"
              idInput="email"
              isRequired={true}
              typeInput={"email"}
            />
          </Box>
          <Box display={"flex"}>
            <CFromInput
              textformlabel="Password"
              name="password"
              idInput="password"
              isRequired={true}
              typeInput={"password"}
            />
           
            <CFromInput
              textformlabel="Confirm Password"
              name="confirmpassword"
              idInput="confirmpassword"
              isRequired={true}
              typeInput={"password"}
            />
          </Box>
          {Error === true ? <Text color={"red"}>{textError}</Text> : <></>}
          <Button colorScheme={"blue"} type="submit" mt={5}>
            Create User
          </Button>
        </form>
        </FormProvider>
      </Box>
      <Box>
        <TCreate data={users} />
      </Box>
    </>
  );
};
export default CFormAddUser;
