import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addToken } from "../../../../redux/slices/userSlices";
import { IAccount, ILogin } from "../../../../types/interface";
import CButton from "../../../atoms/button";
import CFromInput from "../../../molecules/formitem";
/* interface ILogin {
  email: string;
  password: string;
} */
const CFormLogin = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const dispatch = useAppDispatch();
  const [Error, setError] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>();
  const methods = useForm();
  const onSubmit = (data: any) => {
   
    
    apiUser
      .login(data)
      .then((res) => {
        setError(false);
        dispatch(addToken(res.data));
      })
      .catch((error) => {
        setError(true);
        if (error.response.status === 400)
          setTextError(error.response.data.error);
      });
  };
  return (
    <>
      <Box>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box>
              <CFromInput
                textformlabel="Email"
                name="email"
                idInput="email"
                isRequired={true}
                typeInput={"email"}
              />
              {/*  <FormControl isRequired mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="title">
                Email
              </FormLabel>
              <Input
                {...register("email")}
                name="email"
                id="email"
                type="email"
              />
            </FormControl> */}
            </Box>
            <CFromInput
              textformlabel="Password"
              name="password"
              idInput="password"
              isRequired={true}
              typeInput={"password"}
            />
            {/*   <FormControl isRequired mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="password">
              Password
            </FormLabel>
            <Input
              {...register("password")}
              name="password"
              id="password"
              type="password"
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl> */}
            {Error === true ? <Text color={"red"}>{textError}</Text> : <></>}
            <Box textAlign={"center"}>
              <CButton
                color={"#fff"}
                colorScheme={"green"}
                title={"Login"}
                type="submit"
                mt={5}
              />
            </Box>
          </form>
        </FormProvider>
      </Box>
    </>
  );
};
export default CFormLogin;
