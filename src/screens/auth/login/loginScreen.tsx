import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useReducer, useState } from "react";
import commonStyles from "../../../styles/commonStyles";
import { CustomInput } from "../../../components/form";
import {
  CustomButton,
  ScreenContainer,
  SocialMediaButton,
} from "../../../components/shared";
import { FacebookIcon, GoogleIcon } from "../../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoot } from "../../../interfaces/navigation-interface";
import { ROUTE_NAMES } from "../../../utils/routes";
import {
  LoginFormData,
  ValidationData,
} from "../../../interfaces/user-interface";
import { loginInput } from "../../../utils/statics";
import { isEmailValid, useAppDispatch } from "../../../utils/helpers";
import { login } from "../../../store/actions/userActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type Action = { type: string; payload: string };
const formReducer = (state: LoginFormData, action: Action): LoginFormData => {
  return { ...state, [action.type]: action.payload };
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  const dispatch = useAppDispatch();
  const { loadingLogin } = useSelector((state: RootState) => state.userReducer);
  const [formData, formDispatch] = useReducer(formReducer, {
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationData>({});
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
    const requiredFields: (keyof LoginFormData)[] = ["email", "password"];
    const errors: Partial<ValidationData> = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });

    if (!isEmailValid(formData.email)) {
      errors["email"] = `Email is invalid !`;
    }

    setValidationErrors(errors as ValidationData);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(
        login(
          {
            email: formData.email,
            password: formData.password,
          },
          () => {
            navigation.navigate(ROUTE_NAMES.STACK.MAIN, {
              screen: ROUTE_NAMES.MAIN_STACK.HOME,
            });
          }
        )
      );
    }
  };
  return (
    <ScreenContainer>
      <ImageBackground
        source={require("../../../../assets/background.jpg")}
        style={[commonStyles.flex1, commonStyles.justifyCenter]}
        resizeMode="cover"
      >
        <View
          style={[
            commonStyles.flex1,
            commonStyles.p20,
            commonStyles.w100,
            commonStyles.justifyCenter,
          ]}
        >
          <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          {loginInput.map(({ field, id, label, placeholder, type }) => {
            return (
              <CustomInput
                key={id}
                field={field}
                label={label}
                placeholder={placeholder}
                formData={formData}
                setFormData={inputChangehandler}
                type={type}
                validationError={validationErrors[field]}
              />
            );
          })}

          <View style={{ alignSelf: "flex-end" }}>
            <Text
              style={[
                commonStyles.textMedium,
                commonStyles.fs12,
                { textDecorationLine: "underline" },
              ]}
            >
              {" "}
              Forgot Your Password?
            </Text>
          </View>
          <CustomButton
            text="Login"
            loading={loadingLogin}
            onPress={handleSubmit}
            isPrimary={true}
          />
          <CustomButton
            loading={false}
            text="Create an account"
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.STACK.AUTH, {
                screen: ROUTE_NAMES.AUTH_STACK.REGISTER,
              });
            }}
            isPrimary={false}
          />
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text
              style={[styles.orText, commonStyles.fs12, commonStyles.textBold]}
            >
              Or login with
            </Text>
            <View style={styles.line} />
          </View>
          <View
            style={[
              commonStyles.row,
              commonStyles.justifyBetween,
              commonStyles.pt20,
            ]}
          >
            <SocialMediaButton text="Google" logo={<GoogleIcon />} />
            <SocialMediaButton text="Facebook" logo={<FacebookIcon />} />
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  lineContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "#E8ECF4",
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    color: "#6A707C",
  },
});
