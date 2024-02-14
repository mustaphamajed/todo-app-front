import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useReducer, useState } from "react";
import { CustomButton, ScreenContainer } from "../../../components/shared";
import commonStyles from "../../../styles/commonStyles";
import RegisterHeader from "../../../components/headers/registerHeader";
import { registerInput } from "../../../utils/statics";
import { CustomInput } from "../../../components/form";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoot } from "../../../interfaces/navigation-interface";
import { FormData, ValidationData } from "../../../interfaces/user-interface";
import {
  isEmailValid,
  isValidPassword,
  useAppDispatch,
} from "../../../utils/helpers";
import { register } from "../../../store/actions/userActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ROUTE_NAMES } from "../../../utils/routes";

type Action = { type: string; payload: string };
const formReducer = (state: FormData, action: Action): FormData => {
  return { ...state, [action.type]: action.payload };
};

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  const dispatch = useAppDispatch();
  const { loadingRegister, error } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [formData, formDispatch] = useReducer(formReducer, {
    firstname: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationData>({});
  const handleGoBack = () => {
    navigation.goBack();
  };
  const inputChangehandler = useCallback(
    (field: string, inputValue: string) => {
      formDispatch({ type: field, payload: inputValue });

      if (
        validationErrors &&
        validationErrors[field as keyof ValidationData] &&
        inputValue.trim().length > 0
      ) {
        const updatedErrors = { ...validationErrors };
        delete updatedErrors[field as keyof ValidationData];
        setValidationErrors(updatedErrors);
      }
    },
    [formData, formDispatch, validationErrors, setValidationErrors]
  );

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = [
      "firstname",
      "name",
      "email",
      "phone",
      "password",
      "confirmPassword",
    ];
    const errors: Partial<ValidationData> = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });
    if (formData.name.length < 4) {
      errors["name"] = `Name should be more than 4 characters!`;
    }
    if (formData.firstname.length < 4) {
      errors["firstname"] = `First name should be more than 4 characters!`;
    }
    if (!isEmailValid(formData.email)) {
      errors["email"] = `Email is invalid !`;
    }
    if (!isValidPassword(formData.password)) {
      errors[
        "password"
      ] = `Password must contain at least one uppercase letter, one lowercase letter, and one digit`;
    }
    if (formData.confirmPassword !== formData.password) {
      errors["confirmPassword"] = `Password and confirm password do not match.`;
    }
    setValidationErrors(errors as ValidationData);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(
        register(
          {
            firstname: formData.firstname,
            email: formData.email,
            name: formData.name,
            password: formData.password,
            phone: formData.phone,
          },
          () => {
            navigation.navigate(ROUTE_NAMES.STACK.AUTH, {
              screen: ROUTE_NAMES.AUTH_STACK.LOGIN,
            });
          }
        )
      );
    }
  };
  return (
    <ScreenContainer>
      <ImageBackground
        source={require("../../../../assets/bg-blue.png")}
        style={[commonStyles.flex1]}
        resizeMode="cover"
      >
        <RegisterHeader onPress={handleGoBack} />
        <View
          style={[commonStyles.bgWhite, commonStyles.flex1, commonStyles.p20]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {registerInput.map(({ type, field, id, label, placeholder }) => {
              return (
                <CustomInput
                  field={field}
                  label={label}
                  placeholder={placeholder}
                  key={id}
                  type={type}
                  formData={formData}
                  setFormData={inputChangehandler}
                  validationError={validationErrors[field]}
                />
              );
            })}
            <View style={[commonStyles.justifyBetween, commonStyles.row]}>
              <CustomButton
                isPrimary={false}
                onPress={handleGoBack}
                text="Cancel"
                fullWidth={false}
                loading={false}
              />
              <CustomButton
                isPrimary={true}
                onPress={handleSubmit}
                text="Create"
                fullWidth={false}
                loading={loadingRegister}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
