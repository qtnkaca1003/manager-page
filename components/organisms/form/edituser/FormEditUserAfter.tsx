import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppSelector } from "../../../../hook";
import CText from "../../../atoms/text";
import CFromInput from "../../../molecules/formitem";

const CFormEditUserAfter = () => {
  const userAfterEdit = useAppSelector((state) => state.users.UserEdit);
  const methods = useForm();
  return (
    <Box>
      <FormProvider {...methods}>
        <form>
          <Box display={"flex"}>
            <CFromInput
              textformlabel="First name"
              name="first_name"
              idInput="first_name"
              isRequired={true}
              typeInput={"text"}
              defaultValueInput={userAfterEdit.first_name}
            />

            <CFromInput
              textformlabel="Last name"
              name="last_name"
              idInput="last_name"
              isRequired={true}
              typeInput={"text"}
              defaultValueInput={userAfterEdit.last_name}
            />
          </Box>
          <CFromInput
            textformlabel="Email"
            name="email"
            idInput="email"
            isRequired={true}
            typeInput={"email"}
            defaultValueInput={userAfterEdit.email}
          />
        </form>
      </FormProvider>
      <CText
        mt={3}
        fontStyle="italic"
        fontSize="12px"
        title={`Time update: ${userAfterEdit.updatedAt || ""}`}
      />
    </Box>
  );
};
export default CFormEditUserAfter;
