import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addToken } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CButton from "../../../atoms/button";
import CFromInput from "../../../molecules/formitem";
const CFormRegister = () => {
  //const { register, handleSubmit } = useForm<IAccount>();
  const [Error, setError] = useState(false);
  const [textError, setTextError] = useState<string>();
  const dispatch = useAppDispatch();
  const methods = useForm();
  const onSubmit = (data: any) => {
    if (
      data.password.length >= 6 &&
      data.password.length <= 18 &&
      data.confirmpassword.length >= 6 &&
      data.confirmpassword.length <= 18
    ) {
      if (data.password === data.confirmpassword) {
        setError(false);
        apiUser
          .register(data)
          .then((res) => {
            dispatch(addToken(res.data));
          })
          .catch((error) => {
            if (error.response.status === 400) {
              alert(error.response.data.error);
            }
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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box>
              <CFromInput
                textformlabel="Email"
                name="email"
                idInput="email"
                isRequired={true}
                typeInput={"email"}
              />
            </Box>
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
            {Error === true ? <Text color={"red"}>{textError}</Text> : <></>}
            <Box textAlign={"center"}>
              <CButton
                color={"#fff"}
                colorScheme={"green"}
                title={"Register"}
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
export default CFormRegister;
